import { FC } from 'react'
import { FormControl, Input, InputAdornment, InputBase } from '@mui/material'
import { IconSearch } from 'assets/icons'
import s from './Search.module.scss'

interface SearchProps {}

const Search: FC<SearchProps> = () => {
  return (
    <FormControl variant="standard" className={s.form}>
      <InputBase
        placeholder="Search menu..."
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

export default Search
