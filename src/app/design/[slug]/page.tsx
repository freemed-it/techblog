import Markdown from 'react-markdown'
import CodeBlock from '@/components/Code'
import Pre from '@/components/Pre'
import ShareButton from '@/components/ShareButton'
import { findPostByType, getAllPosts } from '@/utils/posts'
import { format } from 'date-fns'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import remarkGfm from 'remark-gfm'

export async function generateStaticParams() {
  const posts = getAllPosts()
  const result = (await posts).reduce<Array<{ type: string; slug: string }>>((prev, { fields: { slug } }) => {
    const [type, slugs] = `${slug.replace('.md', '')}`.split('/')

    prev.push({ type, slug: slugs })
    return prev
  }, [])

  return result
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await findPostByType('design', slug)

  return {
    title: post?.frontMatter.title,
    description: post?.frontMatter.description,
    keywords: post?.frontMatter.tags,
    openGraph: {
      title: post?.frontMatter.title,
      description: post?.frontMatter.description,
      images: post?.frontMatter.thumbnail,
    },
    alternates: {
      canonical: `/design/${slug}`,
    },
  }
}

export default async function Post({ params }: { params: { type: string; slug: string } }) {
  const { slug } = params
  const post = await findPostByType('design', slug)
  if (!post) notFound()
  const {
    frontMatter: { thumbnail, title, profile, author, date },
    body,
  } = post
  const updatedAt = format(new Date(date), 'yyyy년 MM월 dd일')

  return (
    <div className="mx-auto px-5 md:max-w-3xl">
      <article>
        <header>
          <Image
            src={`/${thumbnail}`}
            alt="thumbnail"
            width={500}
            height={500}
            className="mt-9 h-full w-full rounded-xl object-cover"
          />
          <h1 className="heading my-5">{title}</h1>
          <div className="mb-12 flex flex-col items-center justify-center md:flex-row md:justify-start">
            <Image
              src={`/${profile}`}
              alt="thumbnail"
              width={500}
              height={500}
              className="mt-9 h-12 w-12 overflow-hidden rounded-full object-cover md:mt-0 md:h-14 md:w-14"
            />
            <div className="contents pl-3.5 md:block">
              <p className="body1 mt-5 md:mt-0">{author}</p>
              <time className="body2 text-gray-500" dateTime={updatedAt}>
                {updatedAt}
              </time>
            </div>
          </div>
        </header>
        <div>
          <Markdown
            remarkPlugins={[remarkGfm]}
            className={`prose prose-sm prose-slate w-full max-w-full md:prose-base lg:prose-lg`}
            components={{
              pre: Pre,
              code: CodeBlock,
            }}
          >
            {body}
          </Markdown>
        </div>
      </article>
      <div className="border-t border-t-gray-300 py-14 text-center">
        <ShareButton />
      </div>
    </div>
  )
}
