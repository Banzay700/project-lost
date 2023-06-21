import { FC } from 'react'
import { FilterMenu, SearchInput } from 'UI'
import { FilterMenuItemType } from 'types'
import { SearchFilterBarWrapper } from './SearchFilterBar.styled'

interface SearchFilterBarProps {
  subcategories?: FilterMenuItemType[]
  defaultValueInput?: string
  defaultValueFilter?: string[]
  changeCategory: (filterValue: string[]) => void
  changeTitle: (titleValue: string) => void
}

const SearchFilterBar: FC<SearchFilterBarProps> = ({
  subcategories,
  changeCategory,
  changeTitle,
  defaultValueInput,
  defaultValueFilter,
}) => {
  return (
    <SearchFilterBarWrapper>
      <SearchInput onChange={changeTitle} defaultValue={defaultValueInput} />
      <FilterMenu
        isControlScroll
        filterMenuItems={subcategories}
        onChange={changeCategory}
        defaultValue={defaultValueFilter}
      />
    </SearchFilterBarWrapper>
  )
}

export default SearchFilterBar
