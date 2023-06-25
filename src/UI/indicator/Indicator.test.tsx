import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Indicator } from '.'

describe('testing indicator', () => {
  test('Indicator with props dineIn', () => {
    const { container } = render(<Indicator type="primary" label="Dine in" />)
    const indicatorElement = screen.getByText('Dine in')
    const svgElement = container.querySelector('svg')

    expect(indicatorElement).toBeInTheDocument()
    expect(svgElement).toBeInTheDocument()
  })
  test('Indicator with props takeAway', () => {
    const { container } = render(<Indicator type="blue" label="Take away" />)
    const indicatorElement = screen.getByText('Take away')
    const svgElement = container.querySelector('svg')

    expect(indicatorElement).toBeInTheDocument()
    expect(svgElement).toBeInTheDocument()
  })
  test('Indicator with props delivery', () => {
    const { container } = render(<Indicator type="yellow" label="Delivery" />)
    const indicatorElement = screen.getByText('Delivery')
    const svgElement = container.querySelector('svg')

    expect(indicatorElement).toBeInTheDocument()
    expect(svgElement).toBeInTheDocument()
  })
  test('Indicator with props reserved', () => {
    const { container } = render(<Indicator type="primary" label="Available" />)
    const indicatorElement = screen.getByText('Reserved')
    const svgElement = container.querySelector('svg')

    expect(indicatorElement).toBeInTheDocument()
    expect(svgElement).toBeInTheDocument()
  })
  test('Indicator with props available', () => {
    const { container } = render(<Indicator type="blue" label="Available" />)
    const indicatorElement = screen.getByText('Available')
    const svgElement = container.querySelector('svg')

    expect(indicatorElement).toBeInTheDocument()
    expect(svgElement).toBeInTheDocument()
  })
})
