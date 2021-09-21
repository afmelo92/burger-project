import { HStack, Fade } from '@chakra-ui/react'
import ProductsGrid from 'components/ProductsGrid'
import SideMenu from 'components/SideMenu'
import BaseTemplate from 'templates/Base'

const MenuTemplate = () => {
  return (
    <Fade in={true}>
      <BaseTemplate>
        <HStack
          aria-label="menu"
          backgroundColor="white"
          w="100%"
          h="100%"
          py={{ base: '5px', md: '5px' }}
          px={{ base: '5px', md: '10px' }}
          align={{ base: 'start', md: 'center' }}
        >
          <SideMenu />
          <ProductsGrid />
        </HStack>
      </BaseTemplate>
    </Fade>
  )
}

export default MenuTemplate
