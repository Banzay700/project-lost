import { FC } from 'react'
import { Box, Pagination, Stack } from '@mui/material'
import { SearchFilterBar, Table } from 'components'
import { useGetAllUsersQuery } from 'store/api'
import { useParamsSearchFilter } from 'hooks'
import { filterItems, tableHeaders } from './adminEmployeesListPage.utils'

const AdminEmployeesListPage: FC = () => {
  const {
    params: role,
    field,
    page,
    handleFilterTitle,
    handleFilterCategory,
    handlePagination,
  } = useParamsSearchFilter('role')
  const { data } = useGetAllUsersQuery({ role, field, page })

  const handleClick = (id: string) => {
    console.log(id)
  }

  return (
    <Stack sx={{ width: '100%', height: '100%', gap: '20px' }}>
      <Box sx={{ height: '90%' }}>
        <SearchFilterBar
          subcategories={filterItems}
          changeCategory={handleFilterCategory}
          changeTitle={handleFilterTitle}
          defaultValueFilter={role?.split(',')}
          defaultValueInput={field || ''}
        />
        <Stack sx={{ height: '90%' }}>
          {data && (
            <Table
              data={data.data}
              tableTitles={tableHeaders}
              tableType="users"
              onClick={handleClick}
            />
          )}
        </Stack>
      </Box>
      <Stack sx={{ alignItems: 'flex-end', marginRight: '50px', height: '10%' }}>
        {data && (
          <Pagination
            count={Math.ceil(data.totalCount / 8)}
            variant="outlined"
            shape="rounded"
            color="primary"
            onChange={handlePagination}
            defaultPage={Number(page)}
          />
        )}
      </Stack>
    </Stack>
  )
}

export default AdminEmployeesListPage
