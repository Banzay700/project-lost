import { Checkbox } from '@mui/material'
import { FC } from 'react'
import { Button } from 'UI/button'
import { FieldInputProps } from 'formik'

interface CheckboxItemProps {
  text: string
  value: string
  field: FieldInputProps<string>
  checked: boolean
}
export const CheckboxItem: FC<CheckboxItemProps> = (props) => {
  const { text, value, field, checked } = props

  return (
    <Checkbox
      {...field}
      checked={checked}
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
    />
  )
}
