import { render, screen } from '@testing-library/react'
import { theme } from 'theme/index'
import { ThemeProvider } from '@mui/material'
import DetailsListTitle from './DetailsListTitle'

describe('DetailsListTitle', () => {
  const component = (
    <ThemeProvider theme={theme}>
      <DetailsListTitle title="test" orderNumber={32429} />
    </ThemeProvider>
  )
  test('should render title', () => {
    render(component)
    expect(screen.getByText('test')).toBeInTheDocument()
  })
  test('should render orderId', () => {
    render(component)
    expect(screen.getByText('Order # 32429')).toBeInTheDocument()
  })
  test('should have class wrapper', () => {
    render(component)
    expect(screen.getByText('test')).toHaveClass('MuiTypography-root')
  })
})
