import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { LinkItemType } from 'types'
import { vi } from 'vitest'
import { MenuItem } from '.'

describe('testing MenuItem', () => {
  const mokMenuItem: LinkItemType = {
    title: 'testTitle',
    icon: <div data-testid="icon">TestIcon</div>,
    link: 'testLink',
  }

  test('render props className, link, icon, onClick', () => {
    const testFn = vi.fn()
    render(
      <BrowserRouter>
        <MenuItem data={mokMenuItem} onClose={testFn} className="test-class" />
      </BrowserRouter>,
    )
    const element = screen.getByText('testTitle')
    const iconElement = screen.queryByTestId('icon')

    fireEvent.click(element)
    expect(testFn).toBeCalled()

    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute('href', '/testLink')
    expect(element).toHaveClass('test-class')

    expect(iconElement).toBeInTheDocument()
  })
})
