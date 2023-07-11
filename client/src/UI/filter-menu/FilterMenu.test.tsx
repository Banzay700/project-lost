import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { FilterMenuItemType } from 'types'
import { BrowserRouter } from 'react-router-dom'
import { FilterMenu } from '.'

describe('testing filter menu', () => {
  const filterMenuMokWithTwoChildren: FilterMenuItemType[] = [
    { value: 'test1', label: 'Test1' },
    { value: 'test2', label: 'Test2' },
  ]
  const filterMenuMokWithManyChildren: FilterMenuItemType[] = [
    { value: 'test1', label: 'Test1' },
    { value: 'test2', label: 'Test2' },
    { value: 'test3', label: 'Test3' },
  ]

  test('render filter menu', () => {
    const testFunc = vi.fn()
    render(
      <BrowserRouter>
        <FilterMenu filterMenuItems={filterMenuMokWithTwoChildren} onChange={testFunc} />
      </BrowserRouter>,
    )
    const defaultElement = screen.getByText('All')
    const firstElement = screen.getByText('Test1')
    const secondElement = screen.getByText('Test2')
    expect(defaultElement).toBeInTheDocument()
    expect(firstElement).toBeInTheDocument()
    expect(secondElement).toBeInTheDocument()
  })
  test('fire event click in all children', () => {
    const testFunc = vi.fn()
    render(
      <BrowserRouter>
        <FilterMenu filterMenuItems={filterMenuMokWithManyChildren} onChange={testFunc} />
      </BrowserRouter>,
    )

    const button1 = screen.getByText('Test1')
    const button2 = screen.getByText('Test2')
    const button3 = screen.getByText('Test3')

    fireEvent.click(button1)
    fireEvent.click(button2)
    fireEvent.click(button3)
    expect(testFunc).toHaveBeenCalledTimes(3)

    expect(testFunc.mock.calls[0][0]).toEqual(['test1'])

    expect(testFunc.mock.calls[1][0]).toEqual(['test1', 'test2'])

    expect(testFunc.mock.calls[2][0]).toEqual(['all'])
  })
  test('fire event click in two children', () => {
    const testFunc = vi.fn()
    render(
      <BrowserRouter>
        <FilterMenu filterMenuItems={filterMenuMokWithManyChildren} onChange={testFunc} />
      </BrowserRouter>,
    )

    const button1 = screen.getByText('Test1')
    const button2 = screen.getByText('Test2')

    fireEvent.click(button1)
    fireEvent.click(button2)

    expect(testFunc).toHaveBeenCalledTimes(2)

    expect(testFunc.mock.calls[0][0]).toEqual(['test1'])
    expect(testFunc.mock.calls[1][0]).toEqual(['test1', 'test2'])
  })

  test('fire event click with 2 children', () => {
    const testFunc = vi.fn()
    render(
      <BrowserRouter>
        <FilterMenu filterMenuItems={filterMenuMokWithTwoChildren} onChange={testFunc} />
      </BrowserRouter>,
    )

    const buttonOne = screen.getByText('Test1')
    const buttonTwo = screen.getByText('Test2')
    const buttonDefault = screen.getByText('All')

    fireEvent.click(buttonOne)
    fireEvent.click(buttonTwo)
    fireEvent.click(buttonDefault)

    expect(testFunc).toHaveBeenCalledTimes(3)

    expect(testFunc.mock.calls[0][0]).toEqual(['test1'])
    expect(testFunc.mock.calls[1][0]).toEqual(['test2'])
    expect(testFunc.mock.calls[2][0]).toEqual(['all'])
  })
  test('with props default value', () => {
    const testFunc = vi.fn()

    render(
      <BrowserRouter>
        <FilterMenu
          filterMenuItems={filterMenuMokWithTwoChildren}
          onChange={testFunc}
          defaultValue={['test1']}
        />
      </BrowserRouter>,
    )
    const button = screen.getByText('Test1')
    const parentButton = button.closest('button')
    expect(parentButton).toHaveClass('MuiButton-outlinedPrimary')
    expect(parentButton).toBeInTheDocument()
  })
})
