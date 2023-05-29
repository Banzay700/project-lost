import { FC, useEffect } from 'react'
import { useField, useFormikContext } from 'formik'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

import { TableFreeResponseType } from 'types'
import { menuItemsStyle, selectStyle, inputLabelStyle, formControlStyle } from './SelectInput.utils'

interface SelectInputProps {
  name: string
  label: string
  data: TableFreeResponseType[] | undefined
  handleValue: (value: string) => void
  hidden?: boolean
}

const SelectInput: FC<SelectInputProps> = ({ name, label, data, handleValue, hidden }) => {
  const [field] = useField(name)
  const { setFieldValue, values } = useFormikContext<{ table: string; orderType: string }>()
  const { orderType, table } = values

  const handleChange = (event: SelectChangeEvent) => {
    handleValue(event.target.value)
    setFieldValue(name, event.target.value)
  }

  if (table) {
    selectStyle.backgroundColor = '#FFF5EE'
    selectStyle['& .MuiOutlinedInput-notchedOutline'].borderColor = '#FF5C00'
    inputLabelStyle.color = '#FF5C00'
  }

  useEffect(() => {
    setFieldValue(name, '')
  }, [orderType, name, setFieldValue])

  return hidden ? (
    <FormControl sx={formControlStyle} fullWidth>
      <InputLabel sx={inputLabelStyle}>Select table</InputLabel>
      <Select {...field} label={label} sx={selectStyle} onChange={handleChange}>
        {data?.map(({ id, number }) => (
          <MenuItem key={id} value={number} sx={menuItemsStyle}>
            {number}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  ) : null
}

export default SelectInput
