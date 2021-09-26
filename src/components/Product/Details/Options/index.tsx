import { Heading, VStack, HStack, Text, Checkbox } from '@chakra-ui/react'
import { Extra } from 'pages/products/[slug]'

type OptionsProps = {
  extras: Extra[]
}

const Options = ({ extras }: OptionsProps) => {
  return (
    <VStack
      aria-label="extra items area"
      w="full"
      py="2"
      px={{ base: '2', md: '20' }}
      spacing="1"
    >
      <Heading
        fontSize="2xl"
        marginBottom="2"
        borderBottom="2px"
        alignSelf="flex-start"
      >
        Adicionais
      </Heading>
      {extras.length > 0 ? (
        extras.map(extraItem => (
          <HStack
            key={extraItem.id}
            border="1px"
            borderRadius="5px"
            borderColor="gray.300"
            w="100%"
            px="3"
            py="2"
            justifyContent="space-between"
            aria-label="extra item area"
            role="button"
            position="relative"
          >
            <VStack alignItems="flex-start" spacing="0">
              <Heading fontSize={{ base: 'lg', md: 'xl' }}>
                {extraItem.extra_id.name}
              </Heading>
              <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(extraItem.extra_id.price / 100)}
              </Text>
            </VStack>
            <Checkbox
              position="absolute"
              justifyContent="end"
              left="-2"
              px="10"
              w="full"
              h="full"
              size="lg"
              // border="2px"
              colorScheme="yellow"
            />
          </HStack>
        ))
      ) : (
        <Heading paddingTop={32}>Sem adicionais disponíveis</Heading>
      )}
    </VStack>
  )
}

export default Options
