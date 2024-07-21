import fs from 'fs'
import { sync } from 'glob'
import matter from 'gray-matter'
import path from 'path'
import { Post, PostMatter } from '../config/types'

const BASE_PATH = '/posts'
const POSTS_PATH = path.join(process.cwd(), BASE_PATH)

export const getPostPaths = (category?: string) => {
  const folder = category || '**'
  const postPaths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`)
  return postPaths
}

const parsePost = async (postPath: string): Promise<Post> => {
  const postAbstract = parsePostAbstract(postPath)
  const postDetail = await parsePostDetail(postPath)
  return {
    ...postAbstract,
    ...postDetail,
  }
}

export const parsePostAbstract = (postPath: string) => {
  const filePath = postPath.slice(postPath.indexOf(BASE_PATH)).replace(`${BASE_PATH}/`, '').replace('.mdx', '')

  const [categoryPath, slug] = filePath.split('/')
  const url = `/${categoryPath}/${slug}`
  const categoryPublicName = getCategoryPublicName(categoryPath)
  return { url, categoryPath, categoryPublicName, slug }
}

const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8')
  const { data, content } = matter(file)
  const grayMatter = data as PostMatter
  return { ...grayMatter, content }
}

export const getCategoryPublicName = (dirPath: string) =>
  dirPath
    .split('_')
    .map(token => token[0].toUpperCase() + token.slice(1, token.length))
    .join(' ')

const sortPostList = (PostList: Post[]) => {
  return PostList.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export const getPostList = async (category?: string): Promise<Post[]> => {
  const postPaths = getPostPaths(category)
  const postList = await Promise.all(postPaths.map(postPath => parsePost(postPath)))
  return postList
}

export const getSortedPostList = async (category?: string) => {
  const postList = await getPostList(category)
  return sortPostList(postList)
}

export const getCategoryList = () => {
  const cgPaths: string[] = sync(`${POSTS_PATH}/*`)
  const cgList = cgPaths.map(path => path.split('/').slice(-1)?.[0])
  return cgList
}

export const getPostDetail = async (category: string, slug: string) => {
  const filePath = `${POSTS_PATH}/${category}/${slug}/index.mdx`
  const detail = await parsePost(filePath)
  return detail
}
