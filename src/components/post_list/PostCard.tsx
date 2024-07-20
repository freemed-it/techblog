import { Post } from '@/config/types'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import Tag from '../common/Tags'

interface Props {
  post: Post
}

const PostCard = ({ post }: Props) => {
  const updatedAt = format(new Date(post.date), 'yyyy년 MM월 dd일')
  return (
    <Link href={post.url}>
      <li
        className="mx-auto mt-14 flex flex-col rounded-md bg-white md:container 
        md:max-w-3xl md:flex-row md:items-center md:justify-between"
      >
        <div className="grow-1 relative order-1 overflow-hidden rounded md:order-2 md:grow-0 md:basis-auto">
          <Image
            src={`/${post.thumbnail}`}
            alt="thumbnail"
            width={1200}
            height={600}
            className="rounded-lg object-cover md:h-32 md:w-32"
          />
        </div>
        <div className="order-2 flex grow basis-0 flex-col space-y-2 md:order-1 md:mr-6 md:mt-0">
          <div className="flex flex-wrap">
            {post.tags.map(tag => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
          <div className="transition ease-in-out hover:text-freemed-red">
            <h2 className="heading mb-2 inline-block">{post.title}</h2>
            <p className="body1 mb-2 block text-gray-800">{post.description}</p>
            <time className="body2 text-gray-500" dateTime={updatedAt}>
              {updatedAt}
            </time>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default PostCard
