import Header from '@/components/common/Header'
import { Post } from '@/config/types'
import { getPostList } from '@/lib/posts'
import dynamic from 'next/dynamic'

const PostCard = dynamic(() => import('@/components/post_list/PostCard'), { ssr: false })
export default async function Main() {
  const postList = await getPostList('/')
  return (
    <div>
      <Header />
      <section className="mx-auto flex flex-col items-center px-5 md:max-w-3xl">
        <ul className="w-full pb-14">
          {postList.map((post: Post) => (
            <PostCard key={post.url} post={post} />
          ))}
        </ul>
      </section>
    </div>
  )
}
