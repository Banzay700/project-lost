import { useState } from 'react'
import { Form, Formik } from 'formik'
import { Input } from 'UI/input'
import { Button } from 'UI/button'
import { Stack } from '@mui/material'
import { DigitButtonsGroup } from '../digitButtonsGroup'
import { initialValues, validationSchema } from './InputPassword.utils'

const InputPassword = () => {
  const [value, setStateValue] = useState('')

  const getValue = (v: 'clear' | 'delete' | number) => {
    if (typeof v === 'number') {
      setStateValue((prevState) => {
        // eslint-disable-next-line no-return-assign
        return (prevState += String(v))
      })
    } else if (v === 'clear') {
      setStateValue('')
    } else if (v === 'delete') {
      setStateValue((prevState) => prevState.slice(0, prevState.length - 1))
    }

    console.log(value)
  }
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={() => {}}>
      <Form>
        <Stack spacing={8}>
          {/* <Input placeholder="Enter your PIN" name="password" type="password" outlined /> */}

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
