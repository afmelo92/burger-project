import { Button, VStack, Text } from '@chakra-ui/react'

type MenuButtonProps = {
  title: string
  icon: React.ReactNode
}

const MenuButton = ({ title, icon }: MenuButtonProps) => {
  return (
    <Button
      m="auto"
      w="full"
      h="full"
      maxW="180px"
      maxH="180px"
      py="30px"
      px="10px"
      _hover={{ opacity: '80%' }}
      backgroundColor="yellow.500"
    >
      <VStack>
        {icon}
        <Text fontSize="xl" fontWeight="bold">
          {title}
        </Text>
      </VStack>
    </Button>
  )
}

export default MenuButton
