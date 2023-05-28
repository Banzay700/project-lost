import { FC, useState } from 'react'
import { Form, Formik } from 'formik'
import { Stack } from '@mui/material'
import { Input } from 'UI/input'
import { Button } from 'UI/button'
import { BtnValue } from 'types/IEmployee'
import { DigitButtonsGroup } from '../digitButtonsGroup'
import { initialValues, validationSchema } from './InputPassword.utils'

interface InputPasswordProps {
  id: string
}

const InputPassword: FC<InputPasswordProps> = ({ id }) => {
  const [password, setPasswordValue] = useState('')

  const getValue = (v: BtnValue) => {
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
    values.id = id

    console.log({
      values,
    })
    actions.resetForm()
    setPasswordValue('')
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      <Form>
        <Stack spacing={8}>
          <Input
            placeholder="Enter your PIN"
            name="password"
            type="password"
            outlined
            valueExternal={password}
          />

          <DigitButtonsGroup getValue={getValue} />
          <Button variant="contained" size="default" fullWidth>
            Login
          </Button>
        </Stack>
      </Form>
    </Formik>
  )
}

export default InputPassword
