import frontMatter from 'front-matter'
import fs from 'fs'
import { sync } from 'glob'
import path from 'path'
import { FrontMatter, Post } from '../type'

const DIR_REPLACE_STRING = '/posts'
const processedFiles: Set<string> = new Set()

export async function findPostByType(type: string, slug: string) {
  const slugs = [type, slug].join('/')
  const posts = await getAllPosts()
  return posts.find(post => post.fields.slug === slugs)
}

export async function getAllPosts(): Promise<Array<Post>> {
  const postsDirectories = ['tech', 'design'] // Specify the folders
  const allPosts = postsDirectories.flatMap(getAllPostsInDirectory)
  return allPosts
}

export function getAllPostsInDirectory(directory: string): Post[] {
  const POST_PATH = `${process.cwd()}${DIR_REPLACE_STRING}/${directory}`
  const files = sync(`${POST_PATH}/*.md*`).reverse()

  return files
    .reduce<Post[]>((prev, filePath) => {
      const file = fs.readFileSync(filePath, { encoding: 'utf8' })
      const { attributes, body } = frontMatter<FrontMatter>(file)
      const fm: FrontMatter = attributes
      const { tags: fmTags, published, date } = fm

      const slug = `${directory}/${path.basename(filePath, path.extname(filePath))}`

      if (published) {
        const tags: string[] = (fmTags || []).map((tag: string) => tag.trim())

        const result: Post = {
          frontMatter: {
            ...fm,
            tags,
            date: new Date(date).toISOString().substring(0, 19),
          },
          body,
          fields: {
            slug,
          },
          path: filePath, // Store the full file path if needed
          slug: '',
          type: '',
          title: '',
        }
        prev.push(result)
        processedFiles.add(filePath)
      }
      return prev
    }, [])
    .sort((a, b) => {
      if (a.frontMatter.date < b.frontMatter.date) {
        return 1
      }
      if (a.frontMatter.date > b.frontMatter.date) {
        return -1
      }
      return 0
    })
}
