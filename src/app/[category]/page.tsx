import { getCategoryList, getCategoryName } from '@/lib/posts'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

type Props = {
  params: { category: string }
}
export const dynamicParams = false

export function generateStaticParams() {
  const categoryList = getCategoryList()
  const paramList = categoryList.map(category => ({ category }))
  return paramList
}

export async function generateMetadata({ params: { category } }: Props): Promise<Metadata> {
  const cg = getCategoryName(category)
  const title = `${cg}`
  const url = `/${category}`

  return {
    title,
    openGraph: {
      title,
      url,
    },
  }
}

const PostList = dynamic(() => import('@/components/post_list/PostList'), { ssr: false })
const CategoryPage = async ({ params }: Props) => {
  return <PostList category={params.category} />
}

export default CategoryPage
