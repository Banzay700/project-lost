import { ChangeEvent, FC, useState } from 'react'
import { FormControl, InputAdornment, InputBase } from '@mui/material'
import { IconSearch } from 'assets'
import s from './SearchInput.module.scss'

interface SearchInputProps {
  defaultValue?: string
  onChange?: (value: string) => void
}

const SearchInput: FC<SearchInputProps> = ({ defaultValue, onChange }) => {
  const [valueInput, setValueInput] = useState<string>(defaultValue || '')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value)
    if (onChange) {
      onChange(event.target.value)
    }
  }

  return (
    <FormControl variant="standard" className={s.form}>
      <InputBase
        type="search"
        onChange={handleInputChange}
        value={valueInput}
        placeholder="Search..."
        className={s.input}
        startAdornment={
          <InputAdornment position="start">
            <IconSearch className={s.icon} />
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

export default SearchInput
