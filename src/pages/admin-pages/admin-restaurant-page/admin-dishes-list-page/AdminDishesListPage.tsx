import { FC } from 'react'
import { useLazyGetDishByIdQuery } from 'store/api'
import { ModalDishDetailInfo, ModalUpdateDishInfo } from 'components'
import { Stack } from '@mui/material'
import { useIsModal } from 'hooks'
import { DishPartialType } from 'types'
import { AdminDishesListContent } from './admin-dishes-list-content'

const AdminDishesListPage: FC = () => {
  const { isOpen: isOpenDetailInfo, handleToggleIsOpenModal: handleToggleIsOpenModalDetailInfo } =
    useIsModal()
  const { isOpen: isOpenUpdateInfo, handleToggleIsOpenModal: handleToggleIsOpenModalUpdateInfo } =
    useIsModal()
  const [trigger, { data: dish }] = useLazyGetDishByIdQuery()

  const handleClickAction = (id: string) => {
    trigger(id)
    handleToggleIsOpenModalUpdateInfo(100)
  }

  const handleClickLine = (id: string) => {
    trigger(id)
    handleToggleIsOpenModalDetailInfo(100)
  }

  const handleUpdateDish = (value: DishPartialType) => {
    console.log(value)
  }

  return (
    <Stack sx={{ width: '100%', height: '100%', gap: '20px' }}>
      <AdminDishesListContent onClickLine={handleClickLine} onClickAction={handleClickAction} />
      {dish && (
        <ModalDishDetailInfo
          dish={dish}
          isOpenModal={isOpenDetailInfo}
          onCloseModal={handleToggleIsOpenModalDetailInfo}
        />
      )}
      {dish && (
        <ModalUpdateDishInfo
          onCloseModal={handleToggleIsOpenModalUpdateInfo}
          initialValues={dish}
          isOpenModal={isOpenUpdateInfo}
          linkageToForm="update-dish"
          title={dish.title}
          onSubmit={handleUpdateDish}
        />
      )}
    </Stack>
  )
}

export default AdminDishesListPage
