import { SimpleGrid } from '@chakra-ui/react'
import ProductCard from 'components/ProductCard'

const ProductsGrid: React.FC = () => (
  <SimpleGrid
    // p={{ base: '2px', md: '10px' }}
    w="full"
    columns={{ base: 1, md: 2, lg: 3 }}
    maxH="100%"
    // h="100vh"
    spacing={{ base: '40px', md: '20px' }}
    aria-label="grid produtos"
    overflowY="auto"
    // position={{ base: 'relative' }}
    // border="2px"
    // paddingTop={{ base: '10px', md: '0' }}
    sx={{
      '::-webkit-scrollbar': {
        display: 'none'
      }
    }}
  >
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </SimpleGrid>
)

export default ProductsGrid
