import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto flex h-screen flex-col justify-center px-5 md:max-w-3xl">
      <h1 className="heading">404 ERROR</h1>
      <p className="body1 py-6">
        죄송합니다. 페이지를 찾을 수 없습니다. <br />
        존재하지 않는 주소를 입력하셨거나 <br />
        요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.{' '}
      </p>
      <Link href="/">
        <button className="subTitle2 inline-flex items-center rounded-md bg-freemed-red px-6 py-2 text-white">
          홈으로 가기
        </button>
      </Link>
    </div>
  )
}
