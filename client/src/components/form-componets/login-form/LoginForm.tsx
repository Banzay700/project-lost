import { FC, useEffect, useState } from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { Input, Button } from 'UI'
import { ButtonLoginReturnType, UserLoginRequestType } from 'types'
import { DigitButtonsGroup } from 'components'
import { initialValues, validationSchema } from './LoginForm.utils'
import { FormWrapper } from './LoginForm.styled'

interface InputPasswordProps {
  userId: string
  onSubmit: (value: UserLoginRequestType) => void
}

const LoginForm: FC<InputPasswordProps> = ({ userId, onSubmit }) => {
  const [password, setPasswordValue] = useState('')
  const [formValues, setFormValues] = useState(initialValues)

  const getPassword = (value: ButtonLoginReturnType) => {
    if (typeof value === 'number') {
      setPasswordValue((prevState) => prevState + String(value))
    } else if (value === 'clear') {
      setPasswordValue('')
    } else if (value === 'delete') {
      setPasswordValue((prevState) => prevState.slice(0, prevState.length - 1))
    }
  }

  const handleFormSubmit = (
    values: UserLoginRequestType,
    actions: FormikHelpers<UserLoginRequestType>,
  ) => {
    onSubmit(values)
    actions.resetForm()
    setPasswordValue('')
  }

  useEffect(() => {
    const values = { userId, password }

    setFormValues(values)
  }, [password, userId])

  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
      enableReinitialize>
      <Form>
        <FormWrapper>
          <Input placeholder="Enter your PIN" name="password" type="password" outlined focus />
          <DigitButtonsGroup getValue={getPassword} />
          <Button variant="contained" size="medium" fullWidth>
            Login
          </Button>
        </FormWrapper>
      </Form>
    </Formik>
  )
}

export default LoginForm
