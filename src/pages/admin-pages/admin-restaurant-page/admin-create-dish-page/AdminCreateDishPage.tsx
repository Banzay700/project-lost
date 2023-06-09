import { FC } from 'react'
import { CreateDishForm } from 'components'
import { CreateDishFormReturnType } from 'types/ComponentsReturnType'
import { useCreateDishMutation } from 'store/api'
import { Box } from '@mui/material'
import { Snackbar } from 'UI/snackbar'

const AdminCreateDishPage: FC = () => {
  const [createDish, { isError, isSuccess }] = useCreateDishMutation()
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
  return (
    <Box sx={{ width: '100%', height: '100%', p: '24px' }}>
      <CreateDishForm onSubmit={handleSubmitCreateDish} />
      <Snackbar isError={isError} isSuccess={isSuccess} />
    </Box>
  )
}

export default AdminCreateDishPage
