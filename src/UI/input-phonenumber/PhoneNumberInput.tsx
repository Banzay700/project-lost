/* eslint-disable import/no-extraneous-dependencies */
import { FC, useState } from 'react'
import { useFormikContext } from 'formik'

import { Phone, MyLabel } from './PhoneNumberInput.styled'

interface PhoneNumberInputProps {
  name: string
}

const PhoneNumberInput: FC<PhoneNumberInputProps> = ({ name }) => {
  const [isInputFocused, setIsInputFocused] = useState(false)
  const handleInputFocus = () => {
    setIsInputFocused(true)
  }

  const handleInputBlur = () => {
    setIsInputFocused(false)
  }

  const { setFieldValue } = useFormikContext()

  return (
    <div style={{ position: 'relative' }}>
      <Phone
        country="ua"
        regions="europe"
        enableAreaCodes
        placeholder="Enter phone number"
        inputProps={{
          name,
        }}
        onChange={(value: string) => {
          setFieldValue(name, value)
        }}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />

      <MyLabel isInputFocused={isInputFocused}>Phone number</MyLabel>
    </div>
  )
}

export default PhoneNumberInput
