import { FC } from 'react'
import { Pagination, Stack } from '@mui/material'
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
    <Stack sx={{ width: '100%', height: '100%', overflow: 'auto' }}>
      <SearchFilterBar
        subcategories={filterItems}
        changeCategory={handleFilterCategory}
        changeTitle={handleFilterTitle}
        defaultValueFilter={role?.split(',')}
        defaultValueInput={search || ''}
      />
      <Table
        tableMinWidth="660px"
        data={data?.data}
        tableTitles={tableHeaders}
        tableType="users"
        onClickAction={handleClick}
        isLoading={isLoading}
      />
      <Stack
        sx={{
          height: 'fit-content',
          alignItems: 'flex-end',
          marginRight: '30px',
          p: { md: '20px', xs: '10px' },
          flex: 0,
        }}>
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
