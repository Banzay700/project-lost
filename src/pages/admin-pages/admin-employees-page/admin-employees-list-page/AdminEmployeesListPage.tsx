import { FC } from 'react'
import { Box, Pagination, Stack } from '@mui/material'
import { ModalUpdateUserInfo, SearchFilterBar, Table } from 'components'
import { useGetAllUsersQuery, useLazyGetUserByIDQuery, useUpdateUserMutation } from 'store/api'
import { useIsModal, useParamsSearchFilter } from 'hooks'
import { UserPartialType } from 'types'
import { filterItems, tableHeaders } from './adminEmployeesListPage.utils'

const AdminEmployeesListPage: FC = () => {
  const {
    params: role,
    search,
    page,
    handleFilterTitle,
    handleFilterCategory,
    handlePagination,
  } = useParamsSearchFilter('role')
  const { data, isLoading } = useGetAllUsersQuery({ role, search, page })
  const [trigger, { data: user }] = useLazyGetUserByIDQuery()
  const [updateUser] = useUpdateUserMutation()
  const { isOpen, handleToggleIsOpenModal } = useIsModal()

  const handleClick = (id: string) => {
    trigger(id)
    handleToggleIsOpenModal()
  }

  const handleSubmitUpdateForm = (value: UserPartialType) => {
    updateUser(value)
    handleToggleIsOpenModal()
  }

  return (
    <Stack sx={{ width: '100%', height: '100%', gap: '20px' }}>
      <Box sx={{ height: '90%' }}>
        <SearchFilterBar
          subcategories={filterItems}
          changeCategory={handleFilterCategory}
          changeTitle={handleFilterTitle}
          defaultValueFilter={role?.split(',')}
          defaultValueInput={search || ''}
        />
        <Stack sx={{ height: '90%' }}>
          <Table
            data={data?.data}
            tableTitles={tableHeaders}
            tableType="users"
            onClickAction={handleClick}
            isLoading={isLoading}
          />
        </Stack>
      </Box>
      <Stack sx={{ alignItems: 'flex-end', marginRight: '50px', height: '10%' }}>
        {data && (
          <Pagination
            count={Math.ceil(data.totalCount / 8)}
            variant="text"
            shape="rounded"
            color="primary"
            onChange={handlePagination}
            page={Number(page)}
          />
        )}
      </Stack>
      {user && (
        <ModalUpdateUserInfo
          title={`${user.firstName} ${user.secondName}`}
          initialValues={user}
          isOpenModal={isOpen}
          linkageToForm="update-user"
          onCloseModal={handleToggleIsOpenModal}
          onSubmit={handleSubmitUpdateForm}
        />
      )}
    </Stack>
  )
}

export default AdminEmployeesListPage
