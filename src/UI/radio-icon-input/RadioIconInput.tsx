import { FC, ReactNode } from 'react'
import { FormControl } from '@mui/material'

import { RadioWrapper } from './RadioIconInput.styled'

interface RadioIconInputProps {
  icon: ReactNode
  value: string
}

const RadioIconInput: FC<RadioIconInputProps> = ({ icon, value }) => {
  return (
    <FormControl fullWidth>
      <RadioWrapper checkedIcon={icon} value={value} icon={icon} />
    </FormControl>
  )
}

export default RadioIconInput
