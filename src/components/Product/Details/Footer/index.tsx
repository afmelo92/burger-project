import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Button, HStack, Input } from '@chakra-ui/react'
import { useState } from 'react'
import formatPrice from 'utils/formatPrice'

type FooterProps = {
  price: number
}

const Footer = ({ price }: FooterProps) => {
  const [quantity, setQuantity] = useState(1)

  const handleAddButton = () => {
    if (quantity < 100) setQuantity(quantity => quantity + 1)
  }

  const handleSubtractButton = () => {
    if (quantity > 1) setQuantity(quantity => quantity - 1)
  }

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
      <HStack>
        <Button
          onClick={handleSubtractButton}
          iconSpacing="0"
          leftIcon={<MinusIcon />}
          textColor="blackAlpha.800"
        />
        <Input
          maxW="60px"
          backgroundColor="white"
          type="number"
          value={quantity}
          textAlign="center"
          p="0"
          readOnly
        />
        <Button
          onClick={handleAddButton}
          iconSpacing="0"
          leftIcon={<AddIcon />}
          textColor="blackAlpha.800"
        />
      </HStack>

      <Button
        size="lg"
        fontSize="xl"
        fontWeight="black"
        textColor="white"
        backgroundColor="yellow.500"
      >
        Adicionar {formatPrice(price * quantity)}
      </Button>
    </HStack>
  )
}

export default Footer
