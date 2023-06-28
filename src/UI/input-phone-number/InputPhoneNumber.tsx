import { FC, ChangeEvent, useEffect, useState } from 'react'
import { useField, useFormikContext } from 'formik'

import { Input } from 'UI'
import { REGEX } from 'utils'
import { PHONE_NUMBER_MASK } from './InputPhoneNumber.utils'

interface InputPhoneNumberProps {
  name: string
  label?: string
  disabled?: boolean
}

const InputPhoneNumber: FC<InputPhoneNumberProps> = ({ name, label, disabled }) => {
  const { setFieldValue } = useFormikContext()
  const [field] = useField(name)
  const [number, setNumber] = useState(field.value)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = event.target.value
    const formattedNumber = phoneNumber.replace(REGEX.CREATE_PHONE_NUMBER, PHONE_NUMBER_MASK)

    setNumber(formattedNumber)
  }

  useEffect(() => {
    setFieldValue(name, number)
  }, [number, name, setFieldValue])

  return (
    <Input
      name={name}
      label={label}
      placeholder="Phone number"
      disabled={disabled}
      onChange={handleChange}
    />
  )
}

export default InputPhoneNumber
