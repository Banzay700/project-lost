import { FC } from 'react'
import { Stack } from '@mui/material'
import { ModalUpdateUserInfo, SearchFilterBar, TableUsersLine } from 'components'
import { useGetAllUsersQuery, useLazyGetUserByIDQuery, useUpdateUserMutation } from 'store/api'
import { useIsModal, useParamsSearchFilter } from 'hooks'
import { UserPartialType } from 'types'
import { Pagination, Table } from 'UI'
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
  const { data, isFetching } = useGetAllUsersQuery({ role, search, page, limit: 10 })
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
      <Table tableMinWidth="660px" tableTitles={tableHeaders} isLoading={isFetching}>
        {!isFetching &&
          data?.data.map((users) => (
            <TableUsersLine key={users.id} user={users} onClickAction={handleClick} />
          ))}
      </Table>
      {data && (
        <Pagination
          disabled={data.totalCount > 10}
          marginRight="30px"
          count={Math.ceil(data.totalCount / 10)}
          onChange={handlePagination}
          page={Number(page)}
        />
      )}
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
