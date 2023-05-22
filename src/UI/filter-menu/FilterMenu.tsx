import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { ToggleButtonGroup } from '@mui/material'
import { FilterMenuItemType } from 'types/index'
import { filterListItems } from './filterMenu.utils'
import { DishFilterMenuItem } from './filter-menu-item'
import { useLocation } from 'react-router-dom'

interface FilterMenuProps {
  filterMenuItems: FilterMenuItemType[]
  defaultValue?: string[]
  onChange?: (value: string[]) => void
}

const FilterMenu: FC<FilterMenuProps> = ({ filterMenuItems, defaultValue, onChange }) => {
  const filterDefaultValue = filterListItems(defaultValue || [], filterMenuItems.length)
  const location = useLocation()
  const [filterItems, setFilterItems] = useState(filterDefaultValue)
  const handleChangeFilter = (_: any, newItemFilter: string[]) => {
    const data = filterListItems(newItemFilter, filterMenuItems.length)
    setFilterItems(data)
  }
  const filterItemsMemo = useMemo(() => filterItems, [filterItems])

  useEffect(() => {
    if (onChange) {
      onChange(filterItemsMemo)
    }
  }, [filterItemsMemo])

  useEffect(() => {
    setFilterItems(['all'])
  }, [location.pathname])

  const defaultRenderFilterItem = (
    <DishFilterMenuItem
      value="all"
      label="All"
      onChange={handleChangeFilter}
      menuItems={filterItemsMemo}
    />
  )

  const renderFilterMenuItems = filterMenuItems.map(({ value, label }) => (
    <DishFilterMenuItem
      key={value}
      value={value}
      label={label}
      onChange={handleChangeFilter}
      menuItems={filterItemsMemo}
    />
  ))

  return (
    <ToggleButtonGroup
      value={filterItemsMemo}
      onChange={handleChangeFilter}
      sx={{ gap: '10px', whiteSpace: 'nowrap' }}>
      {defaultRenderFilterItem}
      {renderFilterMenuItems}
    </ToggleButtonGroup>
  )
}

export default FilterMenu
