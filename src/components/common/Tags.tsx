'use client'

import Link from 'next/link'

const Tag = ({ text }: { text: string }) => {
  return (
    <div className="mt-4 md:mt-0">
      <div className="mb-2 mr-2 inline-block rounded bg-gray-50 px-3 py-1 dark:bg-gray-800">
        <Link href={`/`}>
          <span className="body1">#{text}</span>
        </Link>
      </div>
    </div>
  )
}

export default Tag
