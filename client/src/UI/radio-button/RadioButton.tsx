import { FC, ReactNode } from 'react'
import { Radio } from '@mui/material'

import { FormControlLabelWrapper, RadioButtonWrapper, RadioIconWrapper } from './RadioButton.styled'

interface RadioControlLabelProps {
  value: string
  selectedValue: string
  icon: ReactNode
  label: string
}

const RadioButton: FC<RadioControlLabelProps> = ({ value, selectedValue, icon, label }) => {
  const isChecked = selectedValue === value

  return (
    <RadioButtonWrapper>
      <RadioIconWrapper isChecked={isChecked}>{icon}</RadioIconWrapper>
      <FormControlLabelWrapper
        control={<Radio sx={{ color: '#C2C2C2' }} />}
        label={label}
        isChecked={isChecked}
        labelPlacement="start"
        value={value}
      />
    </RadioButtonWrapper>
  )
}

export default RadioButton
