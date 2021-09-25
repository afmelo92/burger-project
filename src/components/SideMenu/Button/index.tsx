import { Button, VStack, Text } from '@chakra-ui/react'
import Link from 'next/link'

export type MenuButtonProps = {
  title: string
  icon: React.ReactNode
}

const MenuButton = ({ title, icon }: MenuButtonProps) => {
  return (
    <Link href={`/menu/${title.toLowerCase()}`} passHref>
      <Button
        m="auto"
        w="full"
        h="full"
        maxW="180px"
        maxH={{ base: '130px', md: '180px' }}
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
    </Link>
  )
}

export default MenuButton
