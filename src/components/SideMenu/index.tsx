import { VStack } from '@chakra-ui/react'

import MenuButton from './Button'
import BeveragesIcon from './Icons/Beverages'
import BurgerIcon from './Icons/Burgers'
import CombosIcon from './Icons/Combos'
import DessertsIcon from './Icons/Desserts'
import SidesIcon from './Icons/Sides'

const SideMenu = () => {
  return (
    <VStack
      aria-label="menu lateral"
      maxW="200px"
      maxH="90%"
      h={{ base: '100%', md: 'full' }}
      // position={{ base: 'sticky' }}
      // border="2px"
      // borderColor="red.400"
    >
      <MenuButton title="Combos" icon={<CombosIcon />} />
      <MenuButton title="Burgers" icon={<BurgerIcon />} />
      <MenuButton title="Sides" icon={<SidesIcon />} />
      <MenuButton title="Beverages" icon={<BeveragesIcon />} />
      <MenuButton title="Desserts" icon={<DessertsIcon />} />
    </VStack>
  )
}

export default SideMenu
