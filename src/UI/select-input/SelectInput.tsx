import { FC, useEffect } from 'react'
import { useField, useFormikContext } from 'formik'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

import { FadeIn } from 'utils/index'
import { InputSelectItemType } from 'types'
import { menuItemsStyle, selectStyle, inputLabelStyle, formControlStyle } from './SelectInput.utils'

interface SelectInputProps {
  name: string
  label: string
  data: InputSelectItemType[] | undefined
  handleValue?: (value: string) => void
  hidden?: boolean
}

const SelectInput: FC<SelectInputProps> = ({ name, label, data, handleValue, hidden }) => {
  const [field] = useField(name)
  const { setFieldValue, values } = useFormikContext<{ table: string; orderType: string }>()
  const { table } = values

  const handleChange = (event: SelectChangeEvent) => {
    if (handleValue) handleValue(event.target.value)
    setFieldValue(name, event.target.value)
  }

  if (table) {
    selectStyle.backgroundColor = '#FFF5EE'
    selectStyle['& .MuiOutlinedInput-notchedOutline'].borderColor = '#FF5C00'
    inputLabelStyle.color = '#FF5C00'
  }

  // useEffect(() => {
  //   setFieldValue(name, '')
  // }, [name, setFieldValue])

  return !hidden ? (
    <FadeIn delay={50}>
      <FormControl sx={formControlStyle} fullWidth>
        <InputLabel sx={inputLabelStyle}>{label}</InputLabel>
        <Select {...field} label={label} sx={selectStyle} onChange={handleChange}>
          {data?.map(({ title, value }) => (
            <MenuItem key={title} value={value} sx={menuItemsStyle}>
              {title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </FadeIn>
  ) : null
}

export default SelectInput
