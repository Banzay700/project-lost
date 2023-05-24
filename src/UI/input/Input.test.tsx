import { render, screen } from '@testing-library/react'
import { Form, Formik } from 'formik'
import Input from './Input'

describe('testing input', () => {
  test('default input with name and placeholder and label', () => {
    const { container } = render(
      <Formik initialValues={{ testName: '' }} onSubmit={() => {}}>
        <Form>
          <Input name="testName" placeholder="test placeholder" label="test label" />
        </Form>
      </Formik>,
    )
    const inputElement = container.querySelector('input')

    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('name', 'testName')
    expect(inputElement).toHaveAttribute('placeholder', 'test placeholder')
    expect(inputElement).toHaveAttribute('value', '')
    expect(inputElement).toHaveClass('MuiOutlinedInput-input')

    expect(screen.getByLabelText('test label')).toBeInTheDocument()
  })
  test('props icon', () => {
    const { container } = render(
      <Formik initialValues={{ testName: '' }} onSubmit={() => {}}>
        <Form>
          <Input
            name="testName"
            placeholder="test"
            label="testLabel"
            icon={<div data-testid="icon">icon</div>}
          />
        </Form>
      </Formik>,
    )
    const iconElement = container.querySelector('[data-testid="icon"]')
    expect(iconElement).toBeInTheDocument()
  })
})
