import { useControlScrollWithButton } from 'hooks'
import { FC, useEffect, useState } from 'react'
import { FilterMenuItemType } from 'types'

import { Stack } from '@mui/material'
import { FilterMenuItem } from './filter-menu-item'
import { ButtonScroll, ButtonScrollWrapper, FilterMenuWrapper } from './FilterMenu.styled'

interface FilterMenuProps {
  filterMenuItems?: FilterMenuItemType[]
  defaultValue?: string[]
  isControlScroll?: boolean
  onChange: (value: string[]) => void
}

const FilterMenu: FC<FilterMenuProps> = ({
  filterMenuItems,
  isControlScroll,
  defaultValue,
  onChange,
}) => {
  const [filterItems, setFilterItems] = useState(defaultValue || ['all'])
  const { scrollContainerRef, handleScrollRight, handleScrollLeft } =
    useControlScrollWithButton<HTMLDivElement>()

  const handleChangeFilter = (value: string) => {
    const withoutAllCategory = filterItems.filter((item) => item !== 'all')
    if (value === 'all') {
      setFilterItems(['all'])
      onChange(['all'])
    } else if (filterItems.some((item) => item === value)) {
      setFilterItems((prevState) => prevState.filter((item) => item !== value))
      onChange(filterItems.filter((item) => item !== value))
    } else if (filterMenuItems?.length === withoutAllCategory.length + 1) {
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
    filterMenuItems && filterMenuItems.length > 2
      ? handleChangeFilter
      : handleChangeFilterWhenTwoItem

  const isLengthItem = filterMenuItems && filterMenuItems?.length > 3
  return (
    <Stack width="100%" direction="row" justifyContent="center" flex={0}>
      {isLengthItem && isControlScroll && (
        <ButtonScrollWrapper>
          <ButtonScroll onClick={handleScrollLeft} onTouchEnd={handleScrollLeft} />
        </ButtonScrollWrapper>
      )}
      <FilterMenuWrapper direction="row" ref={scrollContainerRef} isControlScroll={isControlScroll}>
        <FilterMenuItem
          minWidth={isControlScroll ? 'fit-content' : ''}
          value="all"
          label="All"
          isSelected={filterItems.some((item) => item === 'all')}
          onChange={choiceHandle}
        />
        {filterMenuItems?.map(({ value, label }) => (
          <FilterMenuItem
            minWidth={isControlScroll ? 'fit-content' : ''}
            key={value}
            value={value}
            label={label}
            isSelected={filterItems.some((item) => item === value)}
            onChange={choiceHandle}
          />
        ))}
      </FilterMenuWrapper>
      {isLengthItem && isControlScroll && (
        <ButtonScrollWrapper>
          <ButtonScroll onClick={handleScrollRight} onTouchEnd={handleScrollRight} transformRight />
        </ButtonScrollWrapper>
      )}
    </Stack>
  )
}

export default FilterMenu
