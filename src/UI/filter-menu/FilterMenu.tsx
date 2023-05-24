import { FC, useEffect, useState } from 'react'
import { Stack } from '@mui/material'
import { FilterMenuItemType } from 'types'
import { DishFilterMenuItem } from './filter-menu-item'

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
    <Stack spacing="8px" direction="row">
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
