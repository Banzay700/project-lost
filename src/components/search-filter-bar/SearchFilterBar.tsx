import { FC } from 'react'
import { Box, Divider, Stack } from '@mui/material'
import { FilterMenu, SearchInput } from 'UI'
import { FilterMenuItemType } from 'types'

interface SearchFilterBarProps {
  subcategories: FilterMenuItemType[]
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
    <Stack
      sx={{
        p: '16px 24px',
        borderBottom: '1px solid #E4E4E4',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        gap: '24px',
      }}>
      <Box minWidth="30%">
        <SearchInput onChange={changeTitle} defaultValue={defaultValueInput} />
      </Box>
      <Stack direction="row" sx={{ gap: '24px' }}>
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
    </Stack>
  )
}

export default SearchFilterBar
