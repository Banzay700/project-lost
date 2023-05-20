import { FC, useEffect, useState } from 'react'
import { ToggleButtonGroup } from '@mui/material'
import { FilterMenuItemType } from 'types/index'
import { filterListItems } from './filterMenu.utils'
import { DishFilterMenuItem } from './filter-menu-item'

interface FilterMenuProps {
  filterMenuItems: FilterMenuItemType[]
  defaultValue?: string[]
  onChange?: (value: string[]) => void
}

const FilterMenu: FC<FilterMenuProps> = ({ filterMenuItems, defaultValue, onChange }) => {
  const filterDefaultValue = filterListItems(defaultValue || [], filterMenuItems.length)
  const [filterItems, setFilterItems] = useState(filterDefaultValue)

  const handleChangeFilter = (_: any, newItemFilter: string[]) => {
    const data = filterListItems(newItemFilter, filterMenuItems.length)

    setFilterItems(data)
  }

  const defaultRenderFilterItem = (
    <DishFilterMenuItem
      value="all"
      label="All"
      onChange={handleChangeFilter}
      menuItems={filterItems}
    />
  )

  useEffect(() => {
    if (onChange) {
      onChange(filterItems)
    }
  }, [filterItems, onChange])

  const renderFilterMenuItems = filterMenuItems.map(({ value, label }) => (
    <DishFilterMenuItem
      key={value}
      value={value}
      label={label}
      onChange={handleChangeFilter}
      menuItems={filterItems}
    />
  ))

  return (
    <ToggleButtonGroup value={filterItems} onChange={handleChangeFilter} sx={{ gap: '10px' }}>
      {defaultRenderFilterItem}
      {renderFilterMenuItems}
    </ToggleButtonGroup>
  )
}

export default FilterMenu
