import { Container, VStack, Button, Heading } from '@chakra-ui/react'
import Logo from 'components/Logo'
import Head from 'next/head'
import Link from 'next/link'

const Home = () => {
  return (
    <VStack backgroundColor="yellow.500">
      <Head>
        <title>Burger App</title>
      </Head>
      <Container
        maxW="container.xl"
        border="4px"
        borderColor="purple.500"
        centerContent
        h="100vh"
        p="10"
      >
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
      </Container>
    </VStack>
  )
}

export default Home
