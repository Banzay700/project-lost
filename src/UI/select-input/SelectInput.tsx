import { FC } from 'react'
import { useField, useFormikContext } from 'formik'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { menuItemsStyle, selectStyle, inputLabelStyle, formControlStyle } from './SelectInput.utils'

interface SelectInputProps {
  name: string
  label: string
}

const SelectInput: FC<SelectInputProps> = ({ name, label }) => {
  const [field] = useField(name)
  const { setFieldValue, values } = useFormikContext<{ table: string }>()

  const handleChange = (event: SelectChangeEvent) => {
    setFieldValue(name, event.target.value)
  }

  if (values.table) {
    selectStyle.backgroundColor = '#FFF5EE'
    selectStyle['& .MuiOutlinedInput-notchedOutline'].borderColor = '#FF5C00'
    inputLabelStyle.color = '#FF5C00'
  }

  return (
    <FormControl sx={formControlStyle} fullWidth>
      <InputLabel sx={inputLabelStyle}>Select table</InputLabel>
      <Select {...field} sx={selectStyle} label={label} onChange={handleChange}>
        <MenuItem sx={menuItemsStyle} value="T-01">
          T-01
        </MenuItem>
        <MenuItem sx={menuItemsStyle} value="T-02">
          T-02
        </MenuItem>
        <MenuItem sx={menuItemsStyle} value="T-03">
          T-03
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default SelectInput
