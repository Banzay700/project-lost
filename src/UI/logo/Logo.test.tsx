import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import s from './Logo.module.scss'
import Logo from './Logo'

describe('testing Logo', () => {
  test('Logo with props link and render props view img', () => {
    const { container } = render(
      <BrowserRouter>
        <Logo link="test" view="img" classImg="test-img" classText="test-text" />
      </BrowserRouter>,
    )
    const logoElement = container.querySelector('a')
    const logoImg = container.querySelector('.test-img')
    const logoText = container.querySelector('.test-text')

    expect(logoElement).toHaveClass(s.logo)
    expect(logoElement).toHaveAttribute('href', '/test')

    expect(logoImg).toBeInTheDocument()
    expect(logoImg).toHaveClass('test-img')
    expect(logoImg).toHaveClass(s.coca)

    expect(logoText).not.toBeInTheDocument()
  })
  test('Render props view text', () => {
    const { container } = render(
      <BrowserRouter>
        <Logo link="test" view="text" classImg="test-img" classText="test-text" />
      </BrowserRouter>,
    )
    const logoImg = container.querySelector('.test-img')
    const logoText = container.querySelector('.test-text')

    expect(logoText).toBeInTheDocument()
    expect(logoText).toHaveClass('test-text')
    expect(logoText).toHaveClass(s.cocaText)

    expect(logoImg).not.toBeInTheDocument()
  })
  test('Render props view both', () => {
    const { container } = render(
      <BrowserRouter>
        <Logo link="test" view="both" classImg="test-img" classText="test-text" />
      </BrowserRouter>,
    )
    const logoImg = container.querySelector('.test-img')
    const logoText = container.querySelector('.test-text')

    expect(logoText).toBeInTheDocument()
    expect(logoText).toHaveClass('test-text')
    expect(logoText).toHaveClass(s.cocaText)

    expect(logoImg).toBeInTheDocument()
    expect(logoImg).toHaveClass('test-img')
    expect(logoImg).toHaveClass(s.coca)
  })
})
