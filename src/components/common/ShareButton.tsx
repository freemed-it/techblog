'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

const ShareButton = () => {
  const pathname = usePathname()

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      alert('링크가 복사되었습니다.')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <button
      className="subTitle2 inline-flex h-9 items-center rounded-md bg-freemed-red px-6 text-white"
      onClick={() => handleCopyClipBoard(`https://tech.freemed.or.kr${pathname}`)}
    >
      <Image src="/external-link.svg" alt="" width={16} height={16} className="mr-2" />
      공유하기
    </button>
  )
}

export default ShareButton
