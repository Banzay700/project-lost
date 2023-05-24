import { render, screen } from '@testing-library/react'
import DetailsListTitle from './DetailsListTitle'

describe('DetailsListTitle', () => {
  const component = <DetailsListTitle title="Title" orderId="32429" />
  it('should render title', () => {
    render(component)
    expect(screen.getByText('Title')).toBeVisible()
  })
  it('should render orderId', () => {
    render(component)
    expect(screen.getByText('Title')).toBeVisible()
  })
  it('should have class wrapper', () => {
    render(component)
    expect(screen.getByText('Title')).toHaveClass('MuiTypography-root')
  })
})
