import Footer from '@/components/Footer'
import GNB from '@/components/GNB'
import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: '프리메드 기술 블로그',
  description: '청년보건의료NGO 사단법인 프리메드 기술 블로그입니다.',
  generator: 'Next.js',
  applicationName: '프리메드 기술 블로그',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: '사단법인 프리메드' }],
  creator: '사단법인 프리메드',
  publisher: '사단법인 프리메드',
  metadataBase: new URL('https://tech.freemed.or.kr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '프리메드 기술 블로그',
    description: '청년보건의료NGO 사단법인 프리메드 기술 블로그입니다.',
    images: '/og-image.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-48Y51TQ6X4" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-48Y51TQ6X4');
        `}
      </Script>
      <body>
        <GNB />
        <main className="mx-auto pt-16 md:max-w-7xl">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
