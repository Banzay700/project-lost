import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'

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
    fireEvent.click(buttonWrapper)

    expect(buttonWrapper).toBeInTheDocument()
    expect(testFn).toHaveBeenCalledTimes(1)
    expect(testFn).toHaveBeenCalledWith(1)
  })
})
