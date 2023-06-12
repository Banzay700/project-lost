import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import s from './BlurButton.module.scss'

import BlurButton from './BlurButton'

describe('testing button', () => {
  const testFn = vi.fn()
  test('button children', () => {
    render(
      <BlurButton value={1} getValue={testFn}>
        Click me
      </BlurButton>,
    )
    const buttonWrapper = screen.getByText('Click me')
    const button = document.querySelector('button')
    fireEvent.click(buttonWrapper)

    expect(buttonWrapper).toBeInTheDocument()
    expect(button).toHaveClass(s.button)
    expect(testFn).toHaveBeenCalledTimes(1)
    expect(testFn).toHaveBeenCalledWith(1)
  })
})
