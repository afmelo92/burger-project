import { Directus } from '@directus/sdk'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { Extra } from 'pages/products/[slug]'
import MenuTemplate, { MenuTemplatePageProps } from 'templates/Menu'

export type Product = {
  id: number
  status: string
  sort?: null
  user_created: string
  date_created: string
  user_updated: string
  date_updated: string
  name: string
  category: string
  description: string
  price: number
  image: string
  extras: Array<number>
  extra: Extra[]
}

type Collections = {
  products: Product
  extra: Extra
}

export default function MenuPage(props: MenuTemplatePageProps) {
  return <MenuTemplate {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const directus = new Directus<Collections>('http://localhost:8055/')

  await directus.auth.login({
    email: 'admin@example.com',
    password: 'admin'
  })

  const { data } = await directus.items('products').readMany()

  const paths = data?.map(({ category }) => ({
    params: { slug: category }
  }))

  return {
    paths: paths || [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const directus = new Directus<Collections>('http://localhost:8055/')

  const { slug } = params

  await directus.auth.login({
    email: 'admin@example.com',
    password: 'admin'
  })

  const { data } = await directus.items('products').readMany({
    filter: { category: { _eq: slug } },
    fields: '*,extra.*,extra.extra_id.name,extra.extra_id.price'
  })

  return {
    props: {
      slug,
      items: data
    }
  }
}
