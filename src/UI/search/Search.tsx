import { ChangeEvent, FC } from 'react'
import { FormControl, InputAdornment, InputBase } from '@mui/material'
import { IconSearch } from 'assets/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import s from './Search.module.scss'

const Search: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value
    const queryParams = new URLSearchParams(location.search)
    queryParams.set('q', searchQuery)
    navigate(`?${queryParams.toString()}`)
  }

  return (
    <FormControl variant="standard" className={s.form}>
      <InputBase
        type="search"
        onChange={handleInputChange}
        value={new URLSearchParams(location.search).get('q') || ''}
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
