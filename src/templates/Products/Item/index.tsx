import { Fade } from '@chakra-ui/react'
import ProductDetails from 'components/Product/Details'
import { Product } from 'pages/products/[slug]'
import BaseTemplate from 'templates/Base'

export type ProductsItemTemplatePageProps = {
  product: Product
}

const ProductsItemTemplate = ({ product }: ProductsItemTemplatePageProps) => {
  return (
    <Fade in={true}>
      <BaseTemplate>
        <ProductDetails product={product} />
      </BaseTemplate>
    </Fade>
  )
}

export default ProductsItemTemplate
