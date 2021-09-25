import { Img } from '@chakra-ui/image'
import { Heading, Text, VStack } from '@chakra-ui/layout'
import Link from 'next/link'

type ProductCardProps = {
  name: string
  description: string
  image: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  image
}) => {
  return (
    <Link href={`/products/${name}`} passHref>
      <VStack
        p="2"
        m="0"
        mx="auto"
        as="a"
        cursor="pointer"
        // backgroundColor="red.500"
        // border={{ base: '1px', md: 'none' }}
        borderRadius={{ base: '10px', md: 'none' }}
        // borderColor={{ base: 'gray.300', md: 'none' }}
        textAlign="center"
        justifyContent="center"
        w={{ base: '220px', md: '300px' }}
        h={{ base: '320px', md: '380px' }}
        boxShadow={{ base: 'md', md: 'none' }}
      >
        <Img
          alt="product"
          src={`http://localhost:8055/assets/${image}`}
          objectFit="contain"
          boxSize={{ base: '100px', md: '200px' }}
          maxBlockSize={{ base: '100px', md: '200px' }}
        />
        <Heading size="lg">{name}</Heading>
        <Text w="full" h="full" lineHeight="5">
          {description}
        </Text>
      </VStack>
    </Link>
  )
}

export default ProductCard
