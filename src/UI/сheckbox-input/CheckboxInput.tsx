import { FC } from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'

interface CheckboxInputProps {}

const CheckboxInput: FC<CheckboxInputProps> = () => {
  return <FormControlLabel control={<Checkbox icon={false} />} label="Только текст" />
}

export default CheckboxInput
