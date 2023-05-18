import { FC, ReactNode } from 'react'
import { FormControl, Radio } from '@mui/material'
import s from './RadioIconInput.module.scss'

interface RadioIconInputProps {
  icon: ReactNode
  value: string
  name: string
}

const RadioIconInput: FC<RadioIconInputProps> = ({ icon, value, name }) => {
  return (
    <FormControl fullWidth>
      <Radio className={s.wrapper} checkedIcon={icon} value={value} icon={icon} name={name} />
    </FormControl>
  )
}

export default RadioIconInput
