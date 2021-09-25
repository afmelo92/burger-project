import { ArrowBackIcon } from '@chakra-ui/icons'
import { HStack, Box, Button } from '@chakra-ui/react'
import Logo from 'components/Logo'
import { useRouter } from 'next/router'

const ProductCardHeader: React.FC = () => {
  const router = useRouter()

  return (
    <HStack
      w="full"
      minH={{ base: '55px', md: '70px', lg: '80px' }}
      // border="2px"
      position="relative"
      // borderColor="red.500"
      aria-label="product area header"
    >
      <Box
        p="0"
        m="auto"
        w="100%"
        display="flex"
        position="absolute"
        aria-label="logo area"
        justifyContent="center"
      >
        <Logo size="small" />
      </Box>
      <Button
        left="0"
        position="absolute"
        leftIcon={
          <ArrowBackIcon
            boxSize={{ base: '6', md: '8', lg: '10' }}
            textColor="yellow.500"
          />
        }
        onClick={() => router.back()}
        backgroundColor="whiteAlpha.900"
        top={{ base: '1', md: '3' }}
        h={{ base: '45px', md: '45px', lg: '60px' }}
      />
    </HStack>
  )
}

export default ProductCardHeader
