import { FC } from 'react'
import { Box } from '@mui/material'
import { CreateDishCategoryForm } from 'components'

const AdminCreateCategory: FC = () => {
  return (
    <Box sx={{ width: '100%', height: '100%', p: '24px' }}>
      <CreateDishCategoryForm />
    </Box>
  )
}

export default AdminCreateCategory
