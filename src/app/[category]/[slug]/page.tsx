import ShareButton from '@/components/common/ShareButton'
import { getPostDetail, getPostPaths, parsePost } from '@/lib/posts'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

type Props = {
  params: { category: string; slug: string }
}

export const dynamicParams = false

export async function generateMetadata({ params: { category, slug } }: Props): Promise<Metadata> {
  const post = await getPostDetail(category, slug)

  const title = `${post.title}`
  const imageURL = `/${post.thumbnail}`

  return {
    title,
    description: post.description,

    openGraph: {
      title,
      description: post.description,
      type: 'article',
      publishedTime: post.date.toString(),
      url: `${post.url}`,
      images: [imageURL],
    },
  }
}

export async function generateStaticParams() {
  const postPaths: string[] = getPostPaths()
  const paramList = await Promise.all(
    postPaths.map(async path => {
      const post = await parsePost(path)
      return { category: post.categoryPath, slug: post.slug }
    })
  )
  return paramList
}

const PostHeader = dynamic(() => import('@/components/post_detail/PostHeader'), { ssr: false })
const PostBody = dynamic(() => import('@/components/post_detail/PostBody'), { ssr: false })
const PostDetail = async ({ params: { category, slug } }: Props) => {
  const post = await getPostDetail(category, slug)
  return (
    <div className="prose mx-auto w-full max-w-[750px] px-5 dark:prose-invert sm:px-6">
      <PostHeader post={post} />
      <article className="relative">
        <PostBody post={post} />
      </article>
      <hr />
      <div className="pb-12 text-center">
        <ShareButton />
      </div>
    </div>
  )
}

export default PostDetail
