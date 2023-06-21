import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Logo from './Logo'

describe('testing Logo', () => {
  test('Logo with props link and render props view img', () => {
    const { container } = render(
      <BrowserRouter>
        <Logo link="test" />
      </BrowserRouter>,
    )
    const logoElement = container.querySelector('a')

    expect(logoElement).toHaveAttribute('href', '/test')
  })
})
