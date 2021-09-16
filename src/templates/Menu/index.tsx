import { Box, VStack } from '@chakra-ui/layout'
import { HStack, SimpleGrid } from '@chakra-ui/react'
import MenuButton from 'components/Menu/Button'
import BeveragesIcon from 'components/Menu/Icons/Beverages'
import BurgerIcon from 'components/Menu/Icons/Burgers'
import CombosIcon from 'components/Menu/Icons/Combos'
import DessertsIcon from 'components/Menu/Icons/Desserts'
import SidesIcon from 'components/Menu/Icons/Sides'
import Base from 'templates/Base'

const MenuTemplate = () => {
  return (
    <Base>
      <HStack
        aria-label="menu"
        backgroundColor="whiteAlpha.900"
        w="100%"
        h="100%"
        p="5"
      >
        <VStack aria-label="menu lateral" maxW="200px" maxH="90%">
          <MenuButton title="Combos" icon={<CombosIcon />} />
          <MenuButton title="Burgers" icon={<BurgerIcon />} />
          <MenuButton title="Sides" icon={<SidesIcon />} />
          <MenuButton title="Beverages" icon={<BeveragesIcon />} />
          <MenuButton title="Desserts" icon={<DessertsIcon />} />
        </VStack>

        <SimpleGrid p="20px" w="full" minChildWidth="280px" spacing="40px">
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
        </SimpleGrid>
      </HStack>
    </Base>
  )
}

export default MenuTemplate
