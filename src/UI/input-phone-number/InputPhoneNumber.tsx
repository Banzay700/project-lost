import { FC, ChangeEvent, useEffect, useState } from 'react'
import { useFormikContext } from 'formik'
import { Input } from 'UI'
import { PHONE_NUMBER_MASK, PHONE_NUMBER_REGEX } from './InputPhoneNumber.utils'

interface InputPhoneNumberProps {
  name: string
  label?: string
  disabled?: boolean
}

const InputPhoneNumber: FC<InputPhoneNumberProps> = ({ name, label, disabled }) => {
  const [number, setNumber] = useState('')
  const { setFieldValue } = useFormikContext()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = event.target.value
    const formattedNumber = phoneNumber.replace(PHONE_NUMBER_REGEX, PHONE_NUMBER_MASK)

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