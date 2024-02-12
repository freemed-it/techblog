'use client'

import { usePathname } from 'next/navigation'

const Header = () => {
  const path = usePathname().split('/')[1]

  return (
    <header className="heading flex h-[600px] flex-col items-center bg-[url('/header-mobile.png')] bg-contain bg-center bg-no-repeat pt-44 text-center font-neo md:h-[420px] md:bg-[url('/header-pc.png')] md:bg-cover">
      <h2>프리메드 기술 블로그</h2>
      <span className="subTitle2 mt-5 rounded-full bg-freemed-red px-6 py-2 text-white">
        {path === 'design' ? '디자인' : '개발'}
      </span>
    </header>
  )
}

export default Header
