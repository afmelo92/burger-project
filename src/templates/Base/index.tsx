import { Container, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'

export type BaseTemplateProps = {
  title?: string
  children: React.ReactNode
}

const Base = ({ children, title = 'Burger App' }: BaseTemplateProps) => {
  return (
    <VStack backgroundColor="yellow.500">
      <Head>
        <title>{title}</title>
      </Head>
      <Container
        maxW="container.xl"
        border="4px"
        borderColor="purple.500"
        centerContent
        h="100vh"
        p="10"
      >
        {children}
      </Container>
    </VStack>
  )
}

export default Base
