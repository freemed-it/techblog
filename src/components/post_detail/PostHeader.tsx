import { Post } from '@/config/types'
import { format } from 'date-fns'
import Image from 'next/image'

interface Props {
  post: Post
}

export const PostHeader = ({ post }: Props) => {
  const updatedAt = format(new Date(post.date), 'yyyy년 MM월 dd일')
  return (
    <header>
      <Image
        src={`/${post.thumbnail}`}
        alt="thumbnail"
        width={500}
        height={500}
        className="mb-0 mt-9 h-full w-full rounded-xl object-cover"
      />
      <h1 className="heading my-9 md:my-5">{post.title}</h1>
      <div className="mb-12 flex flex-col items-center justify-center md:flex-row md:justify-start">
        <Image
          src={`/${post.profile}`}
          alt="thumbnail"
          width={500}
          height={500}
          className="mb-2.5 mt-0 h-12 w-12 overflow-hidden rounded-full object-cover md:h-14 md:w-14"
        />
        <div className="contents pl-3.5 md:block">
          <p className="body1 m-0">{post.author}</p>
          <time className="body2 text-gray-500" dateTime={updatedAt}>
            {updatedAt}
          </time>
        </div>
      </div>
    </header>
  )
}
