import { VStack, Button, Heading } from '@chakra-ui/react'
import Logo from 'components/Logo'
import Link from 'next/link'
import Base from 'templates/Base'

const Home = () => {
  return (
    <Base>
      <VStack m="auto" spacing="40">
        <Heading
          m="auto"
          fontWeight="black"
          fontSize={{ base: '6xl', md: '8xl' }}
          textAlign="center"
        >
          Burger App
        </Heading>

        <Logo size="huge" />

        <Link href="/menu" passHref>
          <Button
            as="a"
            isFullWidth
            size="lg"
            height="80px"
            fontSize="4xl"
            fontWeight="bold"
            backgroundColor="blackAlpha.900"
            color="whiteAlpha.900"
            _hover={{
              backgroundColor: 'whiteAlpha.900',
              color: 'blackAlpha.900'
            }}
          >
            Faça seu pedido!
          </Button>
        </Link>
      </VStack>
    </Base>
  )
}

export default Home
