/* eslint-disable import/no-extraneous-dependencies */
import { FC, useState } from 'react'
import { useField } from 'formik'
import { CountryData } from 'react-phone-input-2'

import { Phone, MyLabel } from './PhoneNumberInput.styled'

interface PhoneNumberInputProps {
  name: string
}
type CustomCountryType = CountryData & {
  countryCode: string
}

const PhoneNumberInput: FC<PhoneNumberInputProps> = ({ name }) => {
  const [isInputFocused, setIsInputFocused] = useState(false)
  const handleInputFocus = () => {
    setIsInputFocused(true)
  }

  const handleInputBlur = () => {
    setIsInputFocused(false)
  }

  const [field, , helpers] = useField(name)

  return (
    <div style={{ position: 'relative' }}>
      <Phone
        value={field.value}
        country="ua"
        regions="europe"
        enableAreaCodes
        placeholder="Enter phone number"
        isValid={(value: string, country: CustomCountryType | object): boolean => {
          if ('countryCode' in country && country.countryCode === '380' && value.length === 12) {
            return true
          }
          if (
            'countryCode' in country &&
            country.countryCode !== '380' &&
            value.match(/^\+?[1-9]\d{8,19}$/)
          ) {
            return true
          }
          return false
        }}
        inputProps={{
          name,
          required: true,
        }}
        onChange={(value: string) => {
          helpers.setValue(value)
        }}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />

      <MyLabel isInputFocused={isInputFocused}>Phone number</MyLabel>
    </div>
  )
}

export default PhoneNumberInput
