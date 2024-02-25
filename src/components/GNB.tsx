'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const GNB = () => {
  const path = usePathname().split('/')[1]
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;
      `

      return () => {
        const scrollY = document.body.style.top
        document.body.style.cssText = ''
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
      }
    }
  }, [isMobileOpen])

  const handleOpen = () => {
    setIsMobileOpen(true)
  }

  const handleClose = () => {
    setIsMobileOpen(false)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex h-16 items-center justify-between px-5 font-neo md:px-20 lg:max-w-7xl">
        <h1>
          <Link href="/tech" className="flex items-center text-base leading-4">
            <Image src="/logo.svg" alt="FREEMED" width={111} height={17} className="mr-2" />
            Tech
          </Link>
        </h1>
        <div className="hidden md:flex md:items-center">
          <Link
            href="/tech"
            className={`${
              (path === 'tech' || path === '') &&
              'before:absolute before:bottom-[-8px] before:left-0 before:h-0.5 before:w-full before:bg-freemed-red before:content-[""]'
            } subTitle2 relative mx-3 px-px font-semibold`}
          >
            개발
          </Link>
          <Link
            href="/design"
            className={`${
              path === 'design' &&
              'before:absolute before:bottom-[-8px] before:left-0 before:h-0.5 before:w-full before:bg-freemed-red before:content-[""]'
            } subTitle2 relative mx-3 px-px font-semibold`}
          >
            디자인
          </Link>
          <Link
            href="https://freemed.or.kr"
            target="_blank"
            className="subTitle2 ml-5 flex items-center font-normal text-gray-700"
          >
            프리메드 홈페이지
            <Image src="/arrow-up-right.svg" alt="바로가기" width={24} height={24} />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={handleOpen} className="flex md:hidden">
            <Image src="/menu-bar.svg" alt="열기" width={32} height={32} />
          </button>
          <div
            onClick={handleClose}
            className={`${isMobileOpen ? 'block' : 'hidden'} fixed left-0 top-0 h-full w-full bg-black/[0.6] md:hidden`}
          />
          <div
            className={`${isMobileOpen ? 'right-0' : 'right-[-264px]'} fixed top-0 flex h-full w-[264px] flex-col justify-between overflow-y-scroll bg-white pb-4 pt-7 transition-all duration-300`}
          >
            <div className="flex flex-col items-end">
              <button onClick={handleClose} className="mb-10 mr-5">
                <Image src="/close.svg" alt="닫기" width={24} height={24} />
              </button>
              <Link
                href="/tech"
                className={`${(path === 'tech' || path === '') && 'text-freemed-red'} subTitle2 w-full border-b border-gray-200 py-4 pl-5 font-semibold`}
                onClick={handleClose}
              >
                개발
              </Link>
              <Link
                href="/design"
                className={`${path === 'design' && 'text-freemed-red'} subTitle2 w-full border-b border-gray-200 py-4 pl-5 font-semibold`}
                onClick={handleClose}
              >
                디자인
              </Link>
            </div>
            <Link
              href="https://freemed.or.kr"
              target="_blank"
              className="subTitle2 flex items-center pl-5 font-normal text-gray-700"
            >
              프리메드 홈페이지 <Image src="/arrow-up-right.svg" alt="바로가기" width={24} height={24} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default GNB
