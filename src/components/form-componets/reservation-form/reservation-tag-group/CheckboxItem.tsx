import { Checkbox } from '@mui/material'
import { FC } from 'react'
import { Button } from 'UI/button'
import { FuncArgs } from './ReservationTagGroup.utils'

interface CheckboxItemProps {
  text: string
  value: string
  onChange: ({ value, isChecked }: FuncArgs) => void
}

export const CheckboxItem: FC<CheckboxItemProps> = (props) => {
  const { text, value, onChange } = props

  return (
    <Checkbox
      value={value}
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
        onChange({ value: e.target.value, isChecked: e.target.checked })
      }}
    />
  )
}
