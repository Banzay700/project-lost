import { FC, useState } from 'react'
import { Typography } from '@mui/material'
import { Button } from 'UI'
import { Icon } from 'assets'
import { useRootLocationPath } from 'hooks'
import { PickerWrapper, ValueWrapper } from './Picker.styled'

interface PickerProps {
  onChange: (value: number) => void
  initialValue?: number
  handleDeleteCard: (value: boolean) => void
}

const Picker: FC<PickerProps> = ({ initialValue = 1, onChange, handleDeleteCard }) => {
  const [valuePicker, setValuePicker] = useState<number>(initialValue)
  const { isHomeLocation } = useRootLocationPath()

  const handleIncrementValue = () => {
    setValuePicker((prevState) => prevState + 1)
    onChange(valuePicker + 1)
  }

  const handleDecrementValue = () => {
    if (valuePicker === 1) {
      handleDeleteCard(true)
      setValuePicker(1)
    } else {
      setValuePicker((prevState) => prevState - 1)
      onChange(valuePicker - 1)
    }
  }

  return isHomeLocation ? (
    <PickerWrapper>
      <Button
        variant="contained"
        size="small"
        color="secondary"
        icon={<Icon.Minus />}
        onClick={handleDecrementValue}
      />
      <ValueWrapper>
        <Typography variant="h3" component="p" fontWeight="600" color="text.secondary">
          {valuePicker}
        </Typography>
      </ValueWrapper>
      <Button
        variant="contained"
        size="small"
        color="secondary"
        icon={<Icon.Plus />}
        onClick={handleIncrementValue}
      />
    </PickerWrapper>
  ) : null
}

export default Picker
