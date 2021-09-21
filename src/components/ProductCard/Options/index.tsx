import { Heading, VStack, HStack, Text, Checkbox } from '@chakra-ui/react'

const Options: React.FC = () => {
  return (
    <VStack
      aria-label="extra items area"
      w="full"
      py="2"
      px={{ base: '2', md: '20' }}
      spacing="1"
      // overflow="hidden"
      // border="2px"
      // minH="40%"
      // alignContent="start"
    >
      <Heading
        fontSize="2xl"
        marginBottom="2"
        borderBottom="2px"
        alignSelf="flex-start"
      >
        Adicionais
      </Heading>
      <HStack
        border="1px"
        borderRadius="5px"
        borderColor="gray.300"
        w="100%"
        px="3"
        py="2"
        justifyContent="space-between"
        aria-label="extra item area"
      >
        <VStack alignItems="flex-start" spacing="0">
          <Heading fontSize={{ base: 'lg', md: 'xl' }}>Cheddar</Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold">
            +R$3,00
          </Text>
        </VStack>
        <Checkbox size="lg" colorScheme="yellow" />
      </HStack>
      <HStack
        border="1px"
        borderRadius="5px"
        borderColor="gray.300"
        w="100%"
        px="3"
        py="2"
        justifyContent="space-between"
        aria-label="extra item area"
      >
        <VStack alignItems="flex-start" spacing="0">
          <Heading fontSize={{ base: 'lg', md: 'xl' }}>Hamburger</Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold">
            +R$13,00
          </Text>
        </VStack>
        <Checkbox size="lg" colorScheme="yellow" />
      </HStack>
      <HStack
        border="1px"
        borderRadius="5px"
        borderColor="gray.300"
        w="100%"
        px="3"
        py="2"
        justifyContent="space-between"
        aria-label="extra item area"
      >
        <VStack alignItems="flex-start" spacing="0">
          <Heading fontSize={{ base: 'lg', md: 'xl' }}>Ovo Frito</Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold">
            +R$3,00
          </Text>
        </VStack>
        <Checkbox size="lg" colorScheme="yellow" />
      </HStack>
    </VStack>
  )
}

export default Options
