import Header from '@/components/Header'
import PostCard from '@/components/PostCard'
import { getAllPostsInDirectory } from '@/utils/posts'

export default async function Main() {
  const posts = getAllPostsInDirectory('tech')
  return (
    <>
      <Header />
      <section className="mx-auto flex flex-col items-center px-5 md:max-w-3xl">
        <ul className="w-full">
          {posts.map(post => (
            <PostCard key={post.fields.slug} post={post} />
          ))}
        </ul>
      </section>
    </>
  )
}
