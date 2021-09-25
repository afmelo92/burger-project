import { Heading, VStack, Image, Text } from '@chakra-ui/react'

type ItemAreaProps = {
  category: string
  name: string
  description: string
  image: string
}

const ItemArea: React.FC<ItemAreaProps> = ({
  category,
  description,
  image,
  name
}) => {
  return (
    <VStack
      // h="full"
      px={{ base: '2', md: '20' }}
      w="full"
      maxH={{ base: '380px', md: '450px' }}
      spacing="0"
      // border="2px"
      direction="column"
      // borderColor="purple.500"
      aria-label="product area"
    >
      <VStack
        px={{ base: '1', md: '2' }}
        w="full"
        alignItems="self-start"
        spacing="0"
      >
        <Heading
          fontSize={{ base: 'xl', md: '2xl' }}
          fontWeight="black"
          mb={{ base: '1', md: '3' }}
          aria-label="product header category"
        >
          {category}
        </Heading>
        <Heading
          fontSize={{ base: '2xl', md: '4xl' }}
          maxW={{ base: '250px', md: '350px' }}
          lineHeight="1"
          aria-label="product header name"
        >
          {name}
        </Heading>
      </VStack>

      <Image
        p="2"
        src={`http://localhost:8055/assets/${image}`}
        objectFit="contain"
        maxH={{ base: '220px', md: '250px', lg: '320px' }}
        alt="super triple burger"
        m="auto"
        aria-label="product image"
        // border="2px"
      />
      <Text
        w="full"
        maxH="150px"
        fontSize={{ base: 'md', md: 'xl' }}
        textAlign="center"
        // border="2px"
      >
        {description}
      </Text>
    </VStack>
  )
}

export default ItemArea
