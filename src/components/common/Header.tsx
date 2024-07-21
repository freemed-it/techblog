'use client'

import { CategoryDetail } from '@/config/types'
import { usePathname } from 'next/navigation'

const categoryList: CategoryDetail[] = [
  { dirName: 'tech', publicName: '개발' },
  { dirName: 'design', publicName: '디자인' },
]

const Header = () => {
  const path = usePathname().split('/')[1]

  return (
    <header className="flex h-[600px] flex-col items-center bg-[url('/header-mobile.png')] bg-contain bg-center bg-no-repeat pt-44 text-center font-neo text-3xl font-bold md:h-[420px] md:bg-[url('/header-pc.png')] md:bg-cover">
      <h2>프리메드 기술 블로그</h2>
      {categoryList.map(cg => (
        <span
          key={cg.dirName}
          className={`${
            path === `${cg.dirName}` && 'subTitle2 mt-5 rounded-full bg-freemed-red px-6 py-2 text-white'
          } `}
        >
          {path === `${cg.dirName}` ? `${cg.publicName}` : ''}
        </span>
      ))}
    </header>
  )
}

export default Header
