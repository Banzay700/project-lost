import { FC, useEffect, useRef, useState } from 'react'
import { Box, Menu, MenuItem, Select, SelectChangeEvent, Stack, Tab, Tabs } from '@mui/material'
import { FilterMenuItemType } from 'types'
import { DishFilterMenuItem } from './filter-menu-item'
import { Button } from 'UI/button'

interface FilterMenuProps {
  filterMenuItems: FilterMenuItemType[]
  defaultValue?: string[]
  onChange: (value: string[]) => void
}

const FilterMenu: FC<FilterMenuProps> = ({ filterMenuItems, defaultValue, onChange }) => {
  const [filterItems, setFilterItems] = useState(defaultValue || ['all'])
  const handleChangeFilter = (value: string) => {
    const withoutAllCategory = filterItems.filter((item) => item !== 'all')
    if (value === 'all') {
      setFilterItems(['all'])
      onChange(['all'])
    } else if (filterMenuItems.length - 1 === withoutAllCategory.length) {
      setFilterItems(['all'])
      onChange(['all'])
    } else if (filterItems.some((item) => item === value)) {
      setFilterItems((prevState) => prevState.filter((item) => item !== value))
      onChange(filterItems.filter((item) => item !== value))
    } else {
      setFilterItems((prevState) => {
        return [...prevState.filter((item) => item !== 'all'), value]
      })
      onChange([...filterItems.filter((item) => item !== 'all'), value])
    }
  }

  useEffect(() => {
    if (defaultValue) {
      setFilterItems(defaultValue)
    }
  }, [defaultValue])

  return (
    <Stack sx={{ gap: '8px' }} direction="row" flexWrap="wrap">
      <DishFilterMenuItem
        value="all"
        label="All"
        isSelected={filterItems.some((item) => item === 'all')}
        onChange={handleChangeFilter}
      />
      {filterMenuItems.map(({ value, label }) => (
        <DishFilterMenuItem
          key={value}
          value={value}
          label={label}
          isSelected={filterItems.some((item) => item === value)}
          onChange={handleChangeFilter}
        />
      ))}
    </Stack>
  )
}

export default FilterMenu
