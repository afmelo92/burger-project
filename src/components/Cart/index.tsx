import { HStack, Button, Heading } from '@chakra-ui/react'

const Cart: React.FC = () => {
  return (
    <HStack
      position="absolute"
      bottom="0"
      overflow="hidden"
      backgroundColor="white"
      w="full"
      maxW="80%"
      justifyContent="space-evenly"
      h="62px"
      p="2"
      // boxShadow=S"xl"
      sx={{
        'box-shadow':
          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      }}
      // border="2px"
    >
      <Heading fontSize="3xl" fontWeight="bold">
        Total: R$1.209,90
      </Heading>
      <Button
        p="6"
        backgroundColor="yellow.500"
        fontSize="xl"
        fontWeight="black"
        textColor="white"
      >
        Fechar pedido
      </Button>
    </HStack>
  )
}

export default Cart
