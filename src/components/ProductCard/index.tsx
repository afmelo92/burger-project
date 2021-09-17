import { Img } from '@chakra-ui/image'
import { Heading, Text, VStack } from '@chakra-ui/layout'

const ProductCard: React.FC = () => {
  return (
    <VStack
      m="0"
      mx="auto"
      maxW={{ base: '220px', md: '300px' }}
      size="4xl"
      textAlign="center"
      // border="2px"
      p="0"
    >
      <Img
        boxSize={{ base: '100px', md: '200px' }}
        objectFit="fill"
        src="/burger.png"
        alt="product"
      />
      <Heading size="lg">Super Triple Burger</Heading>
      <Text maxW="200px">
        3 hamburgueres, alface, queijo, molho especial, cebola picles em um pão
        com gergelim
      </Text>
    </VStack>
  )
}

export default ProductCard
