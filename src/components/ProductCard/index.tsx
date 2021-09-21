import { Img } from '@chakra-ui/image'
import { Heading, Text, VStack } from '@chakra-ui/layout'
import Link from 'next/link'

const ProductCard: React.FC = () => {
  return (
    <Link href="/products/item" passHref>
      <VStack
        p="2"
        m="0"
        mx="auto"
        as="a"
        cursor="pointer"
        // backgroundColor="red.500"
        border={{ base: '1px', md: 'none' }}
        borderRadius={{ base: '10px', md: 'none' }}
        borderColor={{ base: 'gray.300', md: 'none' }}
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
          3 hamburgueres, alface, queijo, molho especial, cebola picles em um
          pão com gergelim
        </Text>
      </VStack>
    </Link>
  )
}

export default ProductCard
