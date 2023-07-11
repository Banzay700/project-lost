import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { Modal } from '.'

describe('testing MenuItem', () => {
  test('render modal with children', () => {
    const onCloseTest = vi.fn()
    render(
      <Modal onClose={onCloseTest} title="testTitle" isOpen>
        <div data-testId="content">Test</div>
      </Modal>,
    )
    const modalElement = screen.getByRole('dialog')
    const modalContentElement = screen.getByTestId('content')

    expect(modalElement).toBeInTheDocument()
    expect(modalContentElement).toBeInTheDocument()
  })
})
