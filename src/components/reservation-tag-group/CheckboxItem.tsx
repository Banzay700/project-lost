import { Checkbox } from '@mui/material'
import { FC } from 'react'
import { Button } from 'UI/button'

interface CheckboxItemProps {
  text: string
  onChange: (value: string, isChecked: boolean) => void
}

export const CheckboxItem: FC<CheckboxItemProps> = (props) => {
  const { text, onChange } = props

  return (
    <Checkbox
      value={text}
      icon={
        <Button variant="outlined" size="default" color="secondary">
          {text}
        </Button>
      }
      checkedIcon={
        <Button variant="outlined" size="default">
          {text}
        </Button>
      }
      onChange={(e) => {
        const isChecked = e.target.checked
        const { value } = e.target
        onChange(value, isChecked)
      }}
    />
  )
}
