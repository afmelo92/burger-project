import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  beforeEach(() => {
    document.getElementById('chakra-toast-portal')?.remove()
  })

  it('should render with small size by default', () => {
    const { debug } = renderWithTheme(<Logo />)

    debug()

    expect(screen.getByRole('img').parentElement).toHaveAttribute('width', '20')
  })
})
