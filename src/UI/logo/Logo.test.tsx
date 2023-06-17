import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Logo from './Logo'

describe('testing Logo', () => {
  test('Logo with props link and render props view img', () => {
    const { container } = render(
      <BrowserRouter>
        <Logo link="test" view="img" />
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
        <Logo link="test" view="text" />
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
        <Logo link="test" view="both" />
      </BrowserRouter>,
    )
    const logoImg = container.querySelector('.test-img')
    const logoText = container.querySelector('.test-text')

    expect(logoText).toBeInTheDocument()

    expect(logoImg).toBeInTheDocument()
  })
})
