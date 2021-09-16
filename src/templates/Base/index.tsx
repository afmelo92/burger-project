import { Container, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'

export type BaseTemplateProps = {
  title?: string
  children: React.ReactNode
}

const BaseTemplate = ({
  children,
  title = 'Burger App'
}: BaseTemplateProps) => {
  return (
    <VStack backgroundColor="yellow.500">
      <Head>
        <title>{title}</title>
      </Head>
      <Container
        maxW="container.xl"
        border="4px" // just for dev
        borderColor="purple.500" //just for dev
        centerContent
        h="100vh"
        p="0"
      >
        {children}
      </Container>
    </VStack>
  )
}

export default BaseTemplate
