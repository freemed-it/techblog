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

export const parsePost = async (postPath: string): Promise<Post> => {
  const filePath = postPath.slice(postPath.indexOf(BASE_PATH)).replace(`${BASE_PATH}/`, '').replace('.mdx', '')
  const [categoryPath, slug] = filePath.split('/')
  const url = `/${categoryPath}/${slug}`
  const file = fs.readFileSync(postPath, 'utf8')
  const { data, content } = matter(file)
  const grayMatter = data as PostMatter
  return {
    url,
    categoryPath,
    slug,
    ...grayMatter,
    content,
  }
}

export const getCategoryName = (dirPath: string) =>
  dirPath
    .split('_')
    .map(token => token[0].toUpperCase() + token.slice(1, token.length))
    .join(' ')

export const getCategoryList = () => {
  const cgPaths: string[] = sync(`${POSTS_PATH}/*`)
  const cgList = cgPaths.map(path => path.split('/').slice(-1)?.[0])
  return cgList
}

const sortPostList = (PostList: Post[]) => {
  return PostList.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export const getPostList = async (category?: string): Promise<Post[]> => {
  const postPaths = getPostPaths(category)
  const postList = await Promise.all(postPaths.map(postPath => parsePost(postPath)))
  return sortPostList(postList)
}

export const getPostDetail = async (category: string, slug: string) => {
  const filePath = `${POSTS_PATH}/${category}/${slug}/index.mdx`
  const detail = await parsePost(filePath)
  return detail
}
