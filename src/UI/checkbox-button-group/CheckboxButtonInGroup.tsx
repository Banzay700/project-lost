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
      sx={{ p: 0, flex: 1, width: '100%' }}
      disableRipple
      checked={checked}
      {...field}
      value={value}
      icon={
        <Button variant="outlined" size="small" color="secondary" fullWidth>
          {title}
        </Button>
      }
      checkedIcon={
        <Button variant="outlined" size="small" color="primary" fullWidth>
          {title}
        </Button>
      }
    />
  )
}

export default CheckboxButtonInGroup
