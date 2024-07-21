export interface PostMatter {
  tags: string[]
  thumbnail: string
  title: string
  description: string
  profile: string
  author: string
  date: string
  path: string
}

export interface Post extends PostMatter {
  url: string
  slug: string
  categoryPath: string
  content: string
  categoryPublicName: string
}

export interface CategoryDetail {
  dirName: string
  publicName: string
}
