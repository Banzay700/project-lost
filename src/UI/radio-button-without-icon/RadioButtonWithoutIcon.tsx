import { FC } from 'react'
import { Radio } from '@mui/material'
import { Button } from 'UI'
import { useField } from 'formik'
import { RadioButtonWithoutIconItemType } from 'types'

const RadioButtonWithoutIcon: FC<RadioButtonWithoutIconItemType> = ({ name, value, label }) => {
  const [field] = useField(name)
  return (
    <Radio
      sx={{ p: 0 }}
      {...field}
      disableRipple
      value={value}
      icon={
        <Button variant="outlined" size="small" fullWidth>
          {label}
        </Button>
      }
      checkedIcon={
        <Button variant="contained" size="small" fullWidth>
          {label}
        </Button>
      }
    />
  )
}

export default RadioButtonWithoutIcon
