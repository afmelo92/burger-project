import { SimpleGrid } from '@chakra-ui/react'
import ProductCard from 'components/Product/Card'
import { Product } from 'pages/menu/[slug]'

type ProductsGridProps = {
  products: Product[]
}

const ProductsGrid = ({ products }: ProductsGridProps) => (
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
    {products.map(product => (
      <ProductCard
        key={product.id}
        name={product.name}
        description={product.description}
        image={product.image}
      />
    ))}
  </SimpleGrid>
)

export default ProductsGrid
