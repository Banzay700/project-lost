import { FC } from 'react'
import { Box, Divider, Stack } from '@mui/material'
import { FilterMenu, SearchInput } from 'UI'
import { FilterMenuItemType } from 'types'

type OnChangeProps = {
  filterValue?: string[]
  titleValue?: string
}

interface SearchFilterBarProps {
  subcategories: FilterMenuItemType[]
  defaultValueInput?: string
  defaultValueFilter?: string[]
  onChange: (props: OnChangeProps) => void
}

const SearchFilterBar: FC<SearchFilterBarProps> = ({
  subcategories,
  onChange,
  defaultValueInput,
  defaultValueFilter,
}) => {
  const handleChangeInput = (value: string) => {
    onChange({ titleValue: value })
  }
  const handleChangeFilter = (value: string[]) => {
    onChange({ filterValue: value })
  }
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
        <SearchInput onChange={handleChangeInput} defaultValue={defaultValueInput} />
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
          onChange={handleChangeFilter}
          defaultValue={defaultValueFilter}
        />
      </Stack>
    </Stack>
  )
}

export default SearchFilterBar
