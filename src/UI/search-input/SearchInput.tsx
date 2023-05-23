import { ChangeEvent, FC, useEffect, useState } from 'react'
import { FormControl, InputAdornment, InputBase } from '@mui/material'
import { IconSearch } from 'assets'
import s from './SearchInput.module.scss'

interface SearchInputProps {
  defaultValue?: string
  onChange: (value: string) => void
}

const SearchInput: FC<SearchInputProps> = ({ defaultValue, onChange }) => {
  const [valueInput, setValueInput] = useState<string>(defaultValue || '')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value)
  }

  useEffect(() => {
    const delay = 500 // Задержка в миллисекундах
    const timeoutId = setTimeout(() => {
      onChange(valueInput)
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [onChange, valueInput, defaultValue])

  useEffect(() => {
    if (defaultValue) {
      setValueInput(defaultValue)
    } else {
      setValueInput('')
    }
  }, [defaultValue])
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
