import { FC, useEffect, useState } from 'react'
import { Stack } from '@mui/material'
import { FilterMenuItemType } from 'types'

import { FilterMenuItem } from './filter-menu-item'

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
    } else if (filterItems.some((item) => item === value)) {
      setFilterItems((prevState) => prevState.filter((item) => item !== value))
      onChange(filterItems.filter((item) => item !== value))
    } else if (filterMenuItems.length === withoutAllCategory.length + 1) {
      setFilterItems(['all'])
      onChange(['all'])
    } else {
      setFilterItems((prevState) => {
        return [...prevState.filter((item) => item !== 'all'), value]
      })
      onChange([...filterItems.filter((item) => item !== 'all'), value])
    }
  }

  const handleChangeFilterWhenTwoItem = (value: string) => {
    setFilterItems([value])
    onChange([value])
  }

  useEffect(() => {
    setFilterItems(defaultValue || ['all'])
  }, [defaultValue])

  const choiceHandle =
    filterMenuItems.length > 2 ? handleChangeFilter : handleChangeFilterWhenTwoItem

  return (
    <Stack sx={{ gap: '8px' }} direction="row" flexWrap="wrap">
      <FilterMenuItem
        value="all"
        label="All"
        isSelected={filterItems.some((item) => item === 'all')}
        onChange={choiceHandle}
      />
      {filterMenuItems.map(({ value, label }) => (
        <FilterMenuItem
          key={value}
          value={value}
          label={label}
          isSelected={filterItems.some((item) => item === value)}
          onChange={choiceHandle}
        />
      ))}
    </Stack>
  )
}

export default FilterMenu
