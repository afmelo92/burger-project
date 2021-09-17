import { Img } from '@chakra-ui/image'
import { Heading, Text, VStack } from '@chakra-ui/layout'

const ProductCard: React.FC = () => {
  return (
    <VStack
      p="0"
      m="0"
      mx="auto"
      // border="2px"
      textAlign="center"
      justifyContent="center"
      w={{ base: '220px', md: '300px' }}
      h={{ base: '320px', md: '380px' }}
    >
      <Img
        alt="product"
        src="/burger.png"
        objectFit="fill"
        boxSize={{ base: '100px', md: '200px' }}
        maxBlockSize={{ base: '100px', md: '200px' }}
      />
      <Heading size="lg">Super Triple Burger</Heading>
      <Text w="full" h="full" lineHeight="5">
        3 hamburgueres, alface, queijo, molho especial, cebola picles em um pão
        com gergelim
      </Text>
    </VStack>
  )
}

export default ProductCard
