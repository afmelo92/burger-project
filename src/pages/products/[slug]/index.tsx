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
  extras: Array<number>
}

type Collections = {
  products: Product
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
    filter: { name: { _eq: `${decodeURIComponent(slug as string)}` } }
  })

  // console.log({
  //   data: products.data
  //   // items: products.data,
  //   // meta: products.meta,
  //   // total: products?.meta?.total_count
  // })

  // const items = products.map(item => ({
  //   id: item.id
  // }))

  return {
    props: {
      slug,
      product: data?.[0]
    } // will be passed to the page component as props
  }
}
