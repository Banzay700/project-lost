import { FC } from 'react'
import s from './CheckboxButtonWithoutIcon.module.scss'
import { Checkbox } from '@mui/material'
import { Button } from 'UI/button'
import { FieldInputProps, useField } from 'formik'

interface CheckboxButtonWithoutIconProps {
  title: string
  value: string
  field: FieldInputProps<string>
  checked: boolean
}

const CheckboxButtonInGroup: FC<CheckboxButtonWithoutIconProps> = ({
  field,
  value,
  title,
  checked,
}) => {
  return (
    <Checkbox
      sx={{ p: 0 }}
      disableRipple
      checked={checked}
      {...field}
      value={value}
      icon={
        <Button variant="outlined" size="default" color="secondary">
          {title}
        </Button>
      }
      checkedIcon={
        <Button variant="outlined" size="default">
          {title}
        </Button>
      }
    />
  )
}

export default CheckboxButtonInGroup
