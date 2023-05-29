import { FC, useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import { Stack } from '@mui/material'
import { Input } from 'UI/input'
import { Button } from 'UI/button'
import { BtnLoginValue } from 'types/IEmployee'
import { DigitButtonsGroup } from '../digitButtonsGroup'
import { initialValues, validationSchema } from './InputPassword.utils'

interface InputPasswordProps {
  id: string
}

const InputPassword: FC<InputPasswordProps> = ({ id }) => {
  const [password, setPasswordValue] = useState('')
  const [formValues, setFormValues] = useState(initialValues)

  const getPassword = (v: BtnLoginValue) => {
    if (typeof v === 'number') {
      setPasswordValue((prevState) => {
        // eslint-disable-next-line no-return-assign
        return (prevState += String(v))
      })
    } else if (v === 'clear') {
      setPasswordValue('')
    } else if (v === 'delete') {
      setPasswordValue((prevState) => prevState.slice(0, prevState.length - 1))
    }
  }

  const handleSubmit = (values, actions) => {
    console.log(values)

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
      onSubmit={handleSubmit}
      enableReinitialize>
      <Form>
        <Stack spacing={8}>
          <Input
            placeholder="Enter your PIN"
            name="password"
            type="password"
            outlined
            valueExternal={password}
          />

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
