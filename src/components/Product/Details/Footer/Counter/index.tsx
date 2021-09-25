import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { HStack, Button, Input } from '@chakra-ui/react'
import { useState } from 'react'

const Counter: React.FC = () => {
  const [counter, setCounter] = useState(1)

  const handleAddButton = () => {
    if (counter < 100) setCounter(counter => counter + 1)
  }

  const handleSubtractButton = () => {
    if (counter > 1) setCounter(counter => counter - 1)
  }

  return (
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
        value={counter}
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
  )
}

export default Counter
