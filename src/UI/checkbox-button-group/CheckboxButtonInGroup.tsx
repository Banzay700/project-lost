import { FC } from 'react'
import { Checkbox } from '@mui/material'
import { Button } from 'UI'
import { FieldInputProps } from 'formik'

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
        <Button variant="outlined" size="medium" color="secondary">
          {title}
        </Button>
      }
      checkedIcon={
        <Button variant="outlined" size="medium" color="primary">
          {title}
        </Button>
      }
    />
  )
}

export default CheckboxButtonInGroup
