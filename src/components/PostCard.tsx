'use client'

import { Post } from '@/type/index'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import Tag from './Tags'

export default function PostCard({ post }: { post: Post }) {
  const {
    fields: { slug },
    frontMatter: { thumbnail, date, title, description, tags },
  } = post
  const updatedAt = format(new Date(date), 'yyyy년 MM월 dd일')
  return (
    <>
      <li
        className="mx-auto mt-14 flex flex-col rounded-md bg-white md:container 
        md:max-w-3xl md:flex-row md:items-center md:justify-between"
        key={post.fields.slug}
      >
        <div className="grow-1 order-1 overflow-hidden rounded md:order-2 md:grow-0 md:basis-auto">
          <div className="relative">
            <Image
              src={`/${thumbnail}`}
              alt="thumbnail"
              width={1200}
              height={600}
              className="rounded object-cover md:h-32 md:w-32"
            />
          </div>
        </div>
        <div className="order-2 flex grow basis-0 flex-col space-y-2 md:order-1 md:mr-6 md:mt-0">
          <div className="flex flex-wrap">
            {tags.map(tag => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
          <Link
            href={`/${slug}`}
            className="align-center flex-col justify-between transition ease-in-out hover:text-freemed-red md:order-1 md:mt-0"
          >
            <h1 className="heading mb-3.5 inline-block">{title}</h1>
            <div>
              <p className="body1 mb-3 block text-gray-800">{description}</p>
              <time className="body2 text-gray-500" dateTime={updatedAt}>
                {updatedAt}
              </time>
            </div>
          </Link>
        </div>
      </li>
    </>
  )
}
