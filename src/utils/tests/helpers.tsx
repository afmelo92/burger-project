import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { render, RenderResult } from '@testing-library/react'
import theme from 'theme'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(
    <ChakraProvider theme={theme}>
      <CSSReset />
      {children}
    </ChakraProvider>
  )
