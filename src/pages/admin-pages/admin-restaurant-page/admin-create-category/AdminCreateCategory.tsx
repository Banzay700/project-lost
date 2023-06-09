import { FC } from 'react'
import { CreateDishCategoryForm } from 'components'
import { Box } from '@mui/material'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AdminCreateCategoryProps {}

const AdminCreateCategory: FC<AdminCreateCategoryProps> = () => {
  return (
    <Box sx={{ width: '100%', height: '100%', p: '24px' }}>
      <CreateDishCategoryForm />
    </Box>
  )
}

export default AdminCreateCategory
