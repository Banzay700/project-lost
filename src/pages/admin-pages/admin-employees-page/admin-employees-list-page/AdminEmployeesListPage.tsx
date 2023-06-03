import { FC } from 'react'
import { Stack } from '@mui/material'
import { SearchFilterBar } from 'components'
import { FilterMenuItemType } from 'types'

const filterMok: FilterMenuItemType[] = [
  {
    label: 'Waiters',
    value: 'waiters',
  },
  {
    label: 'Couriers',
    value: 'couriers',
  },
]

const AdminEmployeesListPage: FC = () => {
  const handleChangeFilter = (value: string[]) => {
    console.log(value)
  }
  const handleChangeFilterTitle = (value: string) => {
    console.log(value)
  }

  return (
    <Stack>
      <SearchFilterBar
        subcategories={filterMok}
        changeCategory={handleChangeFilter}
        changeTitle={handleChangeFilterTitle}
      />
    </Stack>
  )
}

export default AdminEmployeesListPage
