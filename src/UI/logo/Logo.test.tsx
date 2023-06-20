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
    const logoImg = container.querySelector('.test-img')
    const logoText = container.querySelector('.test-text')

    expect(logoElement).toHaveAttribute('href', '/test')

    expect(logoImg).toBeInTheDocument()

    expect(logoText).not.toBeInTheDocument()
  })
  test('Render props view text', () => {
    const { container } = render(
      <BrowserRouter>
        <Logo link="test" />
      </BrowserRouter>,
    )
    const logoImg = container.querySelector('.test-img')
    const logoText = container.querySelector('.test-text')

    expect(logoText).toBeInTheDocument()

    expect(logoImg).not.toBeInTheDocument()
  })
  test('Render props view both', () => {
    const { container } = render(
      <BrowserRouter>
        <Logo link="test" />
      </BrowserRouter>,
    )
    const logoImg = container.querySelector('.test-img')
    const logoText = container.querySelector('.test-text')

    expect(logoText).toBeInTheDocument()

    expect(logoImg).toBeInTheDocument()
  })
})
