import { FC } from 'react'
import { CreateDishForm, ModalCreateCategory } from 'components'
import { CreateCategoryFormReturnType, CreateDishFormReturnType } from 'types/ComponentsReturnType'
import { useCreateCategoryMutation, useCreateDishMutation } from 'store/api'
import { Box } from '@mui/material'
import { Snackbar } from 'UI/snackbar'
import { useIsModal } from 'hooks/useIsModal.hook'

const AdminCreateDishPage: FC = () => {
  const [createDish, { isError, isSuccess }] = useCreateDishMutation()
  const [createCategory] = useCreateCategoryMutation()
  const { isOpen, handleToggleIsOpenModal } = useIsModal()
  const handleSubmitCreateDish = (value: CreateDishFormReturnType) => {
    const formData = new FormData()

    const { picture, ...data } = value

    Object.entries(data).forEach(([keys, values]) => {
      if (values) {
        formData.append(keys, values)
      }
    })
    if (picture) {
      formData.append('picture', picture[0])
    }

    createDish(formData)
  }

  const handleCreateCategorySubmit = (value: CreateCategoryFormReturnType) => {
    const formData = new FormData()
    const { picture, ...data } = value

    if (picture) {
      formData.append('picture', picture[0])
    }
    Object.entries(data).forEach(([keys, values]) => {
      if (values) {
        formData.append(keys, values)
      }
    })
    createCategory(formData)
    handleToggleIsOpenModal()
  }

  return (
    <Box sx={{ width: '100%', height: '100%', p: '24px' }}>
      <CreateDishForm onSubmit={handleSubmitCreateDish} createCategory={handleToggleIsOpenModal} />
      <Snackbar isError={isError} isSuccess={isSuccess} />
      <ModalCreateCategory
        isOpenModal={isOpen}
        onCloseModal={handleToggleIsOpenModal}
        title="Create Category"
        linkageToForm="create-category"
        onSubmit={handleCreateCategorySubmit}
      />
    </Box>
  )
}

export default AdminCreateDishPage
