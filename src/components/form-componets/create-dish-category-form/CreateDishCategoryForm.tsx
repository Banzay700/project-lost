import { FC } from 'react'
import { Form, Formik } from 'formik'
import { Stack } from '@mui/material'
import { CreateCategoryPicture } from './create-category-picture'
import { Input } from 'UI/input'

interface CreateDishCategoryFormProps {}

const CreateDishCategoryForm: FC<CreateDishCategoryFormProps> = () => {
  const handleSubmit = (value: any) => {
    console.log(value)
  }
  return (
    <Formik initialValues={{ test: 'test' }} onSubmit={handleSubmit} enableReinitialize>
      <Form style={{ display: 'flex', gap: '20px', width: '100%' }}>
        <Stack direction="row" sx={{ width: '100%', gap: '20px' }}>
          <Stack sx={{ width: '100%' }}>
            <Input placeholder="Category" name="category" label="Category" />
          </Stack>
          <CreateCategoryPicture />
        </Stack>
      </Form>
    </Formik>
  )
}

export default CreateDishCategoryForm
