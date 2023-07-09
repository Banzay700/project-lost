import { FC } from 'react'
import { useField } from 'formik'
import { PatternFormat } from 'react-number-format'

import { Input } from 'UI'

interface InputPhoneNumberProps {
  name: string
  label?: string
  disabled?: boolean
}

const InputPhoneNumber: FC<InputPhoneNumberProps> = ({ name, label, disabled }) => {
  const [field] = useField(name)

  return (
    <PatternFormat
      format="# (###) #### ###"
      mask="_"
      label={label}
      placeholder="Phone number"
      disabled={disabled}
      {...field}
      customInput={Input}
    />
  )
}

export default InputPhoneNumber
