import { FC, useEffect } from 'react'
import { useField, useFormikContext } from 'formik'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

import { InputSelectItemType, TableFreeResponseType } from 'types'
import { FadeIn } from 'utils'
import { menuItemsStyle, selectStyle } from './SelectInput.utils'

interface SelectInputProps {
  name: string
  label: string
  data: InputSelectItemType[] | undefined
  handleValue?: (value: string) => void
}

const SelectInput: FC<SelectInputProps> = ({ name, label, data, handleValue }) => {
  const [field] = useField(name)
  const { setFieldValue, values } = useFormikContext<{ table: string; orderType: string }>()
  const { table } = values

  const handleChange = (event: SelectChangeEvent) => {
    setFieldValue(name, event.target.value)
    if (handleValue) {
      handleValue(event.target.value)
    }
  }

  if (table) {
    selectStyle.backgroundColor = '#FFF5EE'
    selectStyle['& .MuiOutlinedInput-notchedOutline'].borderColor = '#FF5C00'
    // inputLabelStyle.color = '#FF5C00'
  }

  return (
    <FadeIn delay={50}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          {...field}
          label={label}
          defaultValue={field.value}
          sx={selectStyle}
          onChange={handleChange}>
          {data?.map(({ title, value }) => (
            <MenuItem key={title} value={value} sx={menuItemsStyle}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </FadeIn>
  )
}

export default SelectInput
