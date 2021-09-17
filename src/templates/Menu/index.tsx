import { VStack } from '@chakra-ui/layout'
import { HStack, SimpleGrid } from '@chakra-ui/react'
import MenuButton from 'components/Menu/Button'
import BeveragesIcon from 'components/Menu/Icons/Beverages'
import BurgerIcon from 'components/Menu/Icons/Burgers'
import CombosIcon from 'components/Menu/Icons/Combos'
import DessertsIcon from 'components/Menu/Icons/Desserts'
import SidesIcon from 'components/Menu/Icons/Sides'
import ProductCard from 'components/ProductCard'
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
        <VStack
          aria-label="menu lateral"
          maxW="200px"
          maxH="90%"
          h={{ base: '100%', md: 'full' }}
          position={{ base: 'sticky' }}
          // border="2px"
          // borderColor="red.400"
        >
          <MenuButton title="Combos" icon={<CombosIcon />} />
          <MenuButton title="Burgers" icon={<BurgerIcon />} />
          <MenuButton title="Sides" icon={<SidesIcon />} />
          <MenuButton title="Beverages" icon={<BeveragesIcon />} />
          <MenuButton title="Desserts" icon={<DessertsIcon />} />
        </VStack>

        <SimpleGrid
          // border="4px"
          // p={{ base: '2px', md: '10px' }}
          w="full"
          columns={{ base: 1, md: 2, lg: 3 }}
          maxH="100%"
          h="100vh"
          spacing="20px"
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
