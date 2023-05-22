import { FC } from 'react'
import { Divider, Stack } from '@mui/material'
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
      direction="row"
      sx={{ padding: '16px 24px', borderBottom: '1px solid #E4E4E4' }}
      spacing="24px">
      <SearchInput onChange={handleChangeInput} defaultValue={defaultValueInput} />
      <Divider orientation="vertical" flexItem />
      <FilterMenu
        filterMenuItems={subcategories}
        onChange={handleChangeFilter}
        defaultValue={defaultValueFilter}
      />
    </Stack>
  )
}

export default SearchFilterBar
