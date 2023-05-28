import { render, screen } from '@testing-library/react'
import InfoChip from './InfoChip'
import s from './InfoChip.module.scss'

describe('testing InfoChip', () => {
  test('props delivery', () => {
    render(<InfoChip type="delivery" />)
    const content = screen.getByText('Delivery')
    const wrapper = content.parentElement

    expect(content).toBeInTheDocument()
    expect(wrapper).toHaveClass(s.delivery)
  })
  test('props dineIn', () => {
    render(<InfoChip type="dineIn" />)
    const content = screen.getByText('Dine in')
    const wrapper = content.parentElement

    expect(content).toBeInTheDocument()
    expect(wrapper).toHaveClass(s.dineIn)
  })
  test('props away', () => {
    render(<InfoChip type="takeAway" />)
    const content = screen.getByText('Take away')
    const wrapper = content.parentElement

    expect(content).toBeInTheDocument()
    expect(wrapper).toHaveClass(s.takeAway)
  })
  test('props opened', () => {
    render(<InfoChip type="opened" />)
    const content = screen.getByText('Opened')
    const wrapper = content.parentElement

    expect(content).toBeInTheDocument()
    expect(wrapper).toHaveClass(s.open)
  })
  test('props closed', () => {
    render(<InfoChip type="closed" />)
    const content = screen.getByText('Closed')
    const wrapper = content.parentElement

    expect(content).toBeInTheDocument()
    expect(wrapper).toHaveClass(s.close)
  })
})
