import { FC } from 'react'
import { useLazyGetDishByIdQuery, useUpdateDishMutation } from 'store/api'
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
  const [update] = useUpdateDishMutation()

  const handleClickAction = (id: string) => {
    if (dish?.id !== id) trigger(id)

    handleToggleIsOpenModalUpdateInfo(100)
  }

  const handleClickLine = (id: string) => {
    if (dish?.id !== id) trigger(id)
    handleToggleIsOpenModalDetailInfo(100)
  }

  const handleUpdateDish = (value: DishPartialType) => {
    const formData = new FormData()
    const { picture, ...data } = value

    Object.entries(data).forEach(([keys, values]) => {
      if (values) {
        formData.append(keys, values.toString())
      }
    })
    if (typeof picture !== 'string' && picture) {
      formData.append('picture', picture[0])
    }
    update(formData)
    handleToggleIsOpenModalUpdateInfo()
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
