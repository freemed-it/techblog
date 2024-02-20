export interface FrontMatter {
  slug: string
  type: string
  tags: string[]
  published: boolean
  thumbnail: string
  title: string
  description: string
  profile: string
  author: string
  date: string
  path: string
  socialImageUrl?: string
  socialImageCredit?: string
}

export interface Post {
  title: string
  slug: string
  type: string
  fields: {
    slug: string
  }
  frontMatter: FrontMatter
  body: string
  path: string
}
