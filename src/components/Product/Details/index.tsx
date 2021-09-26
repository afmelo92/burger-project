import { VStack } from '@chakra-ui/react'
import { Product } from 'pages/menu/[slug]'

import Footer from './Footer'
import Header from './Header'
import ItemArea from './ItemArea'
import Options from './Options'

type ProductDetailsProps = {
  product: Product
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <VStack
      // border="2px"
      // borderColor="white"
      h="full"
      w="100%"
      spacing="0"
      position="relative"
      aria-label="product page"
      // justifyContent="space-between"
      backgroundColor="white"
    >
      <Header />

      <ItemArea
        category={product.category}
        name={product.name}
        image={product.image}
        description={product.description}
      />

      <Options extras={product.extra} />

      <Footer />
    </VStack>
  )
}

export default ProductDetails
