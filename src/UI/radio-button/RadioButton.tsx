import { FC, ReactNode } from 'react'
import { FormControlLabel, Radio } from '@mui/material'
import cn from 'classnames'

import { formControlLabelSx } from './RadioButton.utils'
import s from './RadioButton.module.scss'

interface RadioControlLabelProps {
  value: string
  selectedValue: string
  icon: ReactNode
}

const RadioButton: FC<RadioControlLabelProps> = ({ value, selectedValue, icon }) => {
  const isChecked = selectedValue === value

  const formControlLabelConfig = {
    label: value,
    sx: { ...formControlLabelSx },
    control: <Radio sx={{ color: '#C2C2C2' }} />,
  }

  if (isChecked) {
    const { sx } = formControlLabelConfig
    sx.color = '#FF5C00'
    sx.backgroundColor = '#FFF8F5'
    sx.border = '1px solid #FF5C00'
  }

  return (
    <div className={s.radioButton}>
      <div className={cn(s.iconWrapper, { [s.isChecked]: isChecked })}>{icon}</div>
      <FormControlLabel {...formControlLabelConfig} labelPlacement="start" value={value} />
    </div>
  )
}

export default RadioButton
