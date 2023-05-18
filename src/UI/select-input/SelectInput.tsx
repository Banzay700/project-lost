import { FC, SyntheticEvent, useState } from 'react'

import { useField, useFormikContext } from 'formik'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import s from './SelectInput.module.scss'

interface SelectInputProps {
  name: string
  label: string
}

const SelectInput: FC<SelectInputProps> = ({ name, label, value }) => {
  const [field] = useField(name)
  const { setFieldValue, values } = useFormikContext()

  const handleChange = (event: SelectChangeEvent) => {
    setFieldValue(name, event.target.value)
  }

  const formControlConfig = {
    sx: {
      borderRadius: '16px',
      '& .MuiInputBase-root': { borderRadius: '16px', backgroundColor: '#FFF5EE' },
      '& .MuiSelect-select': { padding: '13px' },
    },
  }

  const inputLabelConfig = {
    sx: {
      '&.MuiInputLabel-root': { color: '#C2C2C2', top: '-2px' },
    },
  }

  const menuItemsConfig = {
    sx: {
      '&.MuiMenuItem-root': { borderRadius: '16px' },

      '&.Mui-selected': {
        backgroundColor: '#FFF5EE',
        borderRadius: '16px',
        border: '1px solid #FFA07A',
        color: '#FFA07A',
      },
    },
  }

  if (values.table) {
    const { sx } = formControlConfig
  }
  return (
    <FormControl {...formControlConfig} fullWidth>
      <InputLabel id="select-input" {...inputLabelConfig}>
        Select table
      </InputLabel>
      <Select
        {...field}
        labelId="select-input"
        id="simple-select"
        label={label}
        onChange={handleChange}>
        <MenuItem {...menuItemsConfig} value="T-01">
          T-01
        </MenuItem>
        <MenuItem {...menuItemsConfig} value="T-02">
          T-02
        </MenuItem>
        <MenuItem {...menuItemsConfig} value="T-03">
          T-03
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default SelectInput
