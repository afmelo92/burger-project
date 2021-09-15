import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render properly', () => {
    render(<Logo />)

    expect(
      screen.getByRole('heading', { name: /burger app/i })
    ).toBeInTheDocument()
  })
})
