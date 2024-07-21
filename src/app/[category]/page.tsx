import PostList from '@/components/post_list/PostList'
import { getCategoryList, getCategoryPublicName } from '@/lib/posts'
import { Metadata } from 'next'

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
  const cg = getCategoryPublicName(category)
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

const CategoryPage = async ({ params }: Props) => {
  return <PostList category={params.category} />
}

export default CategoryPage
