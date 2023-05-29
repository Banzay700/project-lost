import { FC, useEffect, useState } from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { Stack } from '@mui/material'
import { Input, Button } from 'UI'
import { ButtonLoginReturnType, UserLoginRequestType } from 'types'
import { DigitButtonsGroup } from '../digitButtonsGroup'
import { initialValues, validationSchema } from './InputPassword.utils'

interface InputPasswordProps {
  id: string
}

const InputPassword: FC<InputPasswordProps> = ({ id }) => {
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
    actions.resetForm()
    setPasswordValue('')
  }

  useEffect(() => {
    const values = { id, password }

    setFormValues(values)
  }, [password, id])

  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
      enableReinitialize>
      <Form>
        <Stack spacing={8}>
          <Input placeholder="Enter your PIN" name="password" type="password" outlined />
          <DigitButtonsGroup getValue={getPassword} />
          <Button variant="contained" size="default" fullWidth>
            Login
          </Button>
        </Stack>
      </Form>
    </Formik>
  )
}

export default InputPassword
