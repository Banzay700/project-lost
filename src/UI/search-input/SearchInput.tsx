import { ChangeEvent, FC, useEffect, useState } from 'react'
import { InputAdornment } from '@mui/material'
import { Icon } from 'assets'
import { FormControlWrapper, InputWrapper } from './SearchInput.styled'

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
    const delay = 500
    const timeoutId = setTimeout(() => {
      onChange(valueInput)
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [valueInput, defaultValue]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (defaultValue) {
      setValueInput(defaultValue)
    } else {
      setValueInput('')
    }
  }, [defaultValue])

  return (
    <FormControlWrapper variant="standard">
      <InputWrapper
        type="search"
        onChange={handleInputChange}
        value={valueInput}
        placeholder="Search..."
        startAdornment={
          <InputAdornment position="start">
            <Icon.Search />
          </InputAdornment>
        }
      />
    </FormControlWrapper>
  )
}

export default SearchInput
