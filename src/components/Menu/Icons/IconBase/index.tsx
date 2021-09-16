import { Container } from '@chakra-ui/react'

type IconBaseProps = {
  children: React.ReactNode
}

const IconBase = ({ children }: IconBaseProps) => {
  return (
    <Container m="auto" width="100px">
      {children}
    </Container>
  )
}

export default IconBase
