import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './Button'

describe('testing button', () => {
  test('button children', () => {
    render(
      <Button variant="contained" size="default">
        Click me
      </Button>,
    )
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
  test('button variant contained and color primary', () => {
    render(
      <Button variant="contained" size="default">
        Click me
      </Button>,
    )
    expect(screen.getByRole('button')).toHaveClass('MuiButton-contained')
    expect(screen.getByRole('button')).toHaveClass('MuiButton-containedPrimary')
  })
  test('button variant outlined and color secondary', () => {
    render(
      <Button variant="outlined" size="default" color="secondary">
        Click me
      </Button>,
    )
    expect(screen.getByRole('button')).toHaveClass('MuiButton-outlined')
    expect(screen.getByRole('button')).toHaveClass('MuiButton-outlinedSecondary')
  })
  test('button variant text', () => {
    render(
      <Button variant="text" size="default">
        Click me
      </Button>,
    )
    expect(screen.getByRole('button')).toHaveClass('MuiButton-text')
  })
  test('button fullWidth', () => {
    render(
      <Button variant="text" size="default" fullWidth>
        Click me
      </Button>,
    )
    expect(screen.getByRole('button')).toHaveClass('MuiButton-fullWidth')
  })
  test('button disabled', () => {
    render(
      <Button variant="text" size="default" disabled>
        Click me
      </Button>,
    )
    expect(screen.getByRole('button')).toHaveAttribute('disabled')
  })
  test('button disabled', () => {
    render(
      <Button variant="text" size="default" disabled>
        Click me
      </Button>,
    )
    expect(screen.getByRole('button')).toHaveAttribute('disabled')
  })
  test('button type submit', () => {
    render(
      <Button variant="text" size="default" type="submit">
        Click me
      </Button>,
    )
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
  })
  test('button type reset', () => {
    render(
      <Button variant="text" size="default" type="reset">
        Click me
      </Button>,
    )
    expect(screen.getByRole('button')).toHaveAttribute('type', 'reset')
  })
  test('button type button', () => {
    render(
      <Button variant="text" size="default" type="button">
        Click me
      </Button>,
    )
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  })
  test('button with icon', () => {
    render(
      <Button
        variant="text"
        size="default"
        type="button"
        icon={<div data-testid="icon">Icon</div>}
      />,
    )
    const button = screen.getByRole('button')

    const icon = button.querySelector('[data-testid="icon"]')

    expect(icon).toBeInTheDocument()
  })
  test('button with end icon and text', () => {
    render(
      <Button
        variant="text"
        size="default"
        type="button"
        endIcon={<div data-testid="icon">Icon</div>}>
        Click me
      </Button>,
    )
    const button = screen.getByRole('button')

    const icon = button.querySelector('[data-testid="icon"]')

    expect(icon).toBeInTheDocument()
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
  test('button with start icon and text', () => {
    render(
      <Button
        variant="text"
        size="default"
        type="button"
        startIcon={<div data-testid="icon">Icon</div>}>
        Click me
      </Button>,
    )
    const button = screen.getByRole('button')

    const icon = button.querySelector('[data-testid="icon"]')

    expect(icon).toBeInTheDocument()
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
  test('button with custom classname', () => {
    render(
      <Button variant="text" size="default" className="test">
        Click me
      </Button>,
    )
    expect(screen.getByRole('button')).toHaveClass('test')
  })
  // test('button handleClick', () => {
  //   const handleClick = jest.fn()
  //   render(
  //     <Button variant="text" size="default" onClick={handleClick}>
  //       Click me
  //     </Button>,
  //   )
  //   const button = screen.getByRole('button')
  //   fireEvent.click(button)
  //   expect(handleClick).toBeCalled()
  // })
})
