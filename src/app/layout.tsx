import Footer from '@/components/Footer'
import GNB from '@/components/GNB'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '프리메드 기술 블로그',
  description: '청년보건의료NGO 사단법인 프리메드 기술 블로그입니다.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <GNB />
        <main className="mx-auto pt-16 md:max-w-7xl">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
