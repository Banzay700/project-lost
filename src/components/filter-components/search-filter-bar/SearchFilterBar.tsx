import { FC } from 'react'
import { Box, Divider, Stack } from '@mui/material'
import { FilterMenu, SearchInput } from 'UI/index'
import { FilterMenuItemType } from 'types/index'
import { SearchFilterBarWrapper } from 'components/filter-components/search-filter-bar/SearchFilterBar.styled'

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
      <Box minWidth="35%">
        <SearchInput onChange={changeTitle} defaultValue={defaultValueInput} />
      </Box>
      <Stack direction="row" sx={{ gap: '24px', justifyContent: 'flex-end' }}>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: 'none', md: 'block' },
          }}
        />
        <FilterMenu
          filterMenuItems={subcategories}
          onChange={changeCategory}
          defaultValue={defaultValueFilter}
        />
      </Stack>
    </SearchFilterBarWrapper>
  )
}

export default SearchFilterBar
