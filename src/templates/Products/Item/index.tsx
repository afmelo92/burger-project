import { VStack, Fade } from '@chakra-ui/react'
import Footer from 'components/ProductCard/Footer'
import Header from 'components/ProductCard/Header'
import ItemArea from 'components/ProductCard/ItemArea'
import Options from 'components/ProductCard/Options'
import BaseTemplate from 'templates/Base'

const ProductsItemTemplate = () => {
  return (
    <Fade in={true}>
      <BaseTemplate>
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

          <ItemArea />

          <Options />

          <Footer />
        </VStack>
      </BaseTemplate>
    </Fade>
  )
}

export default ProductsItemTemplate
