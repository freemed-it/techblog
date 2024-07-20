import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#FBFBFB]">
      <div className="mx-auto flex flex-col justify-between gap-y-6 px-5 py-16 md:max-w-3xl md:flex-row md:items-center md:py-20">
        <div className="flex flex-col">
          <div className="mb-2.5 flex items-center text-base leading-4">
            <Image src="/logo.svg" alt="FREEMED" width={111} height={17} className="mr-2" />
            Tech
          </div>
          <p className="text-xs">Copyright © 2024 FREEMED All Rights Reserved</p>
        </div>
        <div className="flex gap-4">
          <Link href="https://pf.kakao.com/_xbMsxou" target="_blank">
            <Image src="/kakaotalk.svg" alt="카카오톡 채널" width={30} height={30} />
          </Link>
          <Link href="https://www.instagram.com/freemed_official" target="_blank">
            <Image src="/instagram.svg" alt="인스타그램" width={30} height={30} />
          </Link>
          <Link href="https://blog.naver.com/freemedorg" target="_blank">
            <Image src="/blog.svg" alt="블로그" width={30} height={30} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
