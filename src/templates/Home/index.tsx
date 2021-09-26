import { VStack, Button, Heading, Fade } from '@chakra-ui/react'
import Logo from 'components/Logo'
import Link from 'next/link'
import BaseTemplate from 'templates/Base'

const HomeTemplate = () => {
  return (
    // <Container
    //   centerContent
    //   h="100vh"
    //   backgroundColor="yellow.500"
    //   maxW="100vw"
    // >
    <Fade in={true}>
      <BaseTemplate>
        <VStack m="auto" spacing="80px">
          <Heading
            m="auto"
            fontWeight="black"
            fontSize={{ base: '6xl', md: '8xl' }}
            textAlign="center"
          >
            Burger App
          </Heading>

          <Logo size="huge" />

          <Link href="/menu/combos" passHref>
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
      </BaseTemplate>
    </Fade>
    // {/* </Container> */}
  )
}

export default HomeTemplate
