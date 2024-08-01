import { Post } from '@/config/types'
import { getPostList } from '@/lib/posts'
import Header from '../common/Header'
import PostCard from './PostCard'

interface PostListProps {
  category?: string
}

const PostList = async ({ category }: PostListProps) => {
  const postList = await getPostList(category)

  return (
    <>
      <Header />
      <section className="mx-auto flex flex-col items-center px-5 md:max-w-3xl">
        <ul className="w-full pb-14">
          {postList.map((post: Post) => (
            <PostCard key={post.url} post={post} />
          ))}
        </ul>
      </section>
    </>
  )
}

export default PostList
