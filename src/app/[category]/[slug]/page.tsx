import ShareButton from '@/components/common/ShareButton'
import { PostBody } from '@/components/post_detail/PostBody'
import { PostHeader } from '@/components/post_detail/PostHeader'
import { getPostDetail, getPostPaths, parsePostAbstract } from '@/lib/posts'
import { Metadata } from 'next'

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

export function generateStaticParams() {
  const postPaths: string[] = getPostPaths()
  const paramList = postPaths
    .map(path => parsePostAbstract(path))
    .map(item => ({ category: item.categoryPath, slug: item.slug }))
  return paramList
}

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
