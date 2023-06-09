import { FC } from 'react'
import { useField, useFormikContext } from 'formik'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

import { InputSelectItemType } from 'types'
import { FadeIn } from 'utils'
import { menuItemsStyle, selectDefaultStyle, selectActiveStyle } from './SelectInput.utils'

interface SelectInputProps {
  name: string
  label: string
  data: InputSelectItemType[] | undefined
  handleValue?: (value: string) => void
  active?: boolean
}

const SelectInput: FC<SelectInputProps> = ({ name, label, data, handleValue, active }) => {
  const [field] = useField(name)
  const { setFieldValue } = useFormikContext<{ table: string; orderType: string }>()

  const handleChange = (event: SelectChangeEvent) => {
    setFieldValue(name, event.target.value)
    if (handleValue) {
      handleValue(event.target.value)
    }
  }

  return (
    <FadeIn delay={50}>
      <FormControl fullWidth>
        <InputLabel sx={{ color: active ? '#ff5c00' : '#c2c2c2' }}>{label}</InputLabel>
        <Select
          {...field}
          label={label}
          sx={active ? selectActiveStyle : selectDefaultStyle}
          onChange={handleChange}>
          {data?.map(({ title, value }) => (
            <MenuItem key={title} value={value} sx={menuItemsStyle}>
              {title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </FadeIn>
  )
}

export default SelectInput
