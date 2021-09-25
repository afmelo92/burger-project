import { Button, HStack } from '@chakra-ui/react'
import React from 'react'

import Counter from './Counter'

const Footer: React.FC = () => {
  return (
    <HStack
      position="absolute"
      bottom="0"
      h="100px"
      w="full"
      // border="2px"
      justifyContent="space-between"
      px={{ base: '2', md: '20' }}
    >
      <Counter />
      <Button
        size="lg"
        fontSize="xl"
        fontWeight="black"
        textColor="white"
        backgroundColor="yellow.500"
      >
        Adicionar R$1.209,90
      </Button>
    </HStack>
  )
}

export default Footer
