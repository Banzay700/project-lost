import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Indicator } from '.'

// describe('testing indicator', () => {
//   test('Indicator with props dineIn', () => {
//     const { container } = render(<Indicator type="dineIn" />)
//     const indicatorElement = screen.getByText('Dine in')
//     const svgElement = container.querySelector('svg')
//
//     expect(indicatorElement).toBeInTheDocument()
//     expect(svgElement).toBeInTheDocument()
//   })
//   test('Indicator with props takeAway', () => {
//     const { container } = render(<Indicator type="takeAway" />)
//     const indicatorElement = screen.getByText('Take away')
//     const svgElement = container.querySelector('svg')
//
//     expect(indicatorElement).toBeInTheDocument()
//     expect(svgElement).toBeInTheDocument()
//   })
//   test('Indicator with props delivery', () => {
//     const { container } = render(<Indicator type="delivery" />)
//     const indicatorElement = screen.getByText('Delivery')
//     const svgElement = container.querySelector('svg')
//
//     expect(indicatorElement).toBeInTheDocument()
//     expect(svgElement).toBeInTheDocument()
//   })
//   test('Indicator with props reserved', () => {
//     const { container } = render(<Indicator type="reserved" />)
//     const indicatorElement = screen.getByText('Reserved')
//     const svgElement = container.querySelector('svg')
//
//     expect(indicatorElement).toBeInTheDocument()
//     expect(svgElement).toBeInTheDocument()
//   })
//   test('Indicator with props available', () => {
//     const { container } = render(<Indicator type="available" />)
//     const indicatorElement = screen.getByText('Available')
//     const svgElement = container.querySelector('svg')
//
//     expect(indicatorElement).toBeInTheDocument()
//     expect(svgElement).toBeInTheDocument()
//   })
// })
