import { Directus } from '@directus/sdk'
import type { GetStaticPaths, GetStaticProps } from 'next'
import ProductsItemTemplate, {
  ProductsItemTemplatePageProps
} from 'templates/Products/Item'

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
  extra: Extra[]
}

export type Extra = {
  id: number
  products_id: number
  extra_id: {
    name: string
    price: number
  }
}

type Collections = {
  products: Product
  extra: Extra
}

export default function Item(props: ProductsItemTemplatePageProps) {
  return <ProductsItemTemplate {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const directus = new Directus<Collections>('http://localhost:8055/')

  await directus.auth.login({
    email: 'admin@example.com',
    password: 'admin'
  })

  const { data } = await directus.items('products').readMany()

  const paths = data?.map(({ name }) => ({
    params: { slug: name }
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
    filter: { name: { _eq: `${decodeURIComponent(slug as string)}` } },
    fields: '*,extra.*,extra.extra_id.name,extra.extra_id.price'
  })

  return {
    props: {
      slug,
      product: data?.[0]
    }
  }
}
