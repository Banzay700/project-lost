import { FC, useState } from 'react'
import { Button } from 'UI'
import { IconMinus, IconPlus } from 'assets'
import { Typography } from '@mui/material'
import s from './Picker.module.scss'

interface PickerProps {
  onChange: (value: number) => void
}

const Picker: FC<PickerProps> = ({ onChange }) => {
  const [valuePicker, setValuePicker] = useState<number>(1)
  const isDisabled = valuePicker === 1 && true

  const handleIncrementValue = () => {
    setValuePicker((prevState) => prevState + 1)
    onChange(valuePicker + 1)
  }

  const handleDecrementValue = () => {
    setValuePicker((prevState) => prevState - 1)
    onChange(valuePicker - 1)
  }

  return (
    <div className={s.wrapper}>
      <Button
        variant="contained"
        size="small"
        color="secondary"
        icon={<IconMinus />}
        onClick={handleDecrementValue}
        disabled={isDisabled}
      />
      <div className={s.value}>
        <Typography variant="h3" component="p" fontWeight="600" color="text.secondary">
          {valuePicker}
        </Typography>
      </div>
      <Button
        variant="contained"
        size="small"
        color="secondary"
        icon={<IconPlus />}
        onClick={handleIncrementValue}
      />
    </div>
  )
}

export default Picker
