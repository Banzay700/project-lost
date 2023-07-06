import { MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { NativeSelectItemType } from 'types'
import { SelectWrapper } from './NativeSelect.styled'

interface NativeSelectProps {
  data: NativeSelectItemType[]
  defaultTitle?: string
  onChange: (id: string) => void
}

const NativeSelect: FC<NativeSelectProps> = ({ data, defaultTitle, onChange }) => {
  const [value, setValue] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value)
    onChange(event.target.value)
  }

  useEffect(() => {
    if (value === '' && !defaultTitle) {
      setValue(data[0].value)
    }
  }, [data, value, defaultTitle])

  return (
    <SelectWrapper variant="standard">
      <Select displayEmpty value={value} size="small" onChange={handleChange}>
        {defaultTitle && (
          <MenuItem value="">
            <Typography variant="subtitle2">{defaultTitle}</Typography>
          </MenuItem>
        )}
        {data.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            <Typography variant="subtitle2"> {item.label} </Typography>
          </MenuItem>
        ))}
      </Select>
    </SelectWrapper>
  )
}

export default NativeSelect
