import { HStack } from '@chakra-ui/react'
import ProductsGrid from 'components/ProductsGrid'
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
        py={{ base: '5px', md: '5px' }}
        px={{ base: '5px', md: '10px' }}
        align={{ base: 'start', md: 'center' }}
      >
        <SideMenu />
        <ProductsGrid />
      </HStack>
    </Base>
  )
}

export default MenuTemplate
