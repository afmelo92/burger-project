import { HStack, SimpleGrid } from '@chakra-ui/react'
import ProductCard from 'components/ProductCard'
import SideMenu from 'components/SideMenu'
import Base from 'templates/Base'

const MenuTemplate = () => {
  return (
    <Base>
      <HStack
        aria-label="menu"
        backgroundColor="whiteAlpha.900"
        w="100%"
        h="100%"
        // py={{ base: '5px', md: '5px' }}
        px={{ base: '5px', md: '10px' }}
        align={{ base: 'start', md: 'center' }}
      >
        <SideMenu />
        <SimpleGrid
          // p={{ base: '2px', md: '10px' }}
          w="full"
          columns={{ base: 1, md: 2, lg: 3 }}
          maxH="100%"
          h="100vh"
          spacing={{ base: '40px', md: '20px' }}
          aria-label="grid produtos"
          overflowY="auto"
          // paddingTop={{ base: '10px', md: '0' }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </SimpleGrid>
      </HStack>
    </Base>
  )
}

export default MenuTemplate
