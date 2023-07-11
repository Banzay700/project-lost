import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { InfoChip } from '.'

describe('testing InfoChip', () => {
  test('props delivery', () => {
    render(<InfoChip type="delivery" />)
    const content = screen.getByText('Delivery')

    expect(content).toBeInTheDocument()
  })
  test('props dineIn', () => {
    render(<InfoChip type="dineIn" />)
    const content = screen.getByText('Dine in')

    expect(content).toBeInTheDocument()
  })
  test('props away', () => {
    render(<InfoChip type="takeAway" />)
    const content = screen.getByText('Take away')

    expect(content).toBeInTheDocument()
  })
  test('props opened', () => {
    render(<InfoChip type="opened" />)
    const content = screen.getByText('Opened')

    expect(content).toBeInTheDocument()
  })
  test('props closed', () => {
    render(<InfoChip type="closed" />)
    const content = screen.getByText('Closed')

    expect(content).toBeInTheDocument()
  })
})
