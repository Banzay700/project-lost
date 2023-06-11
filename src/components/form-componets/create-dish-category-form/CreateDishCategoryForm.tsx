import { FC } from 'react'
import { Form, Formik } from 'formik'
import { Stack } from '@mui/material'
import { Input } from 'UI'
import { CreateCategoryFormReturnType } from 'types'
import { CreateCategoryPicture } from './create-category-picture'
import { initialValues, validationSchema } from './createDishCategoryForm.utils'

interface CreateDishCategoryFormProps {
  linkageToForm: string
  onSubmit: (value: CreateCategoryFormReturnType) => void
}

const CreateDishCategoryForm: FC<CreateDishCategoryFormProps> = ({ linkageToForm, onSubmit }) => {
  const handleSubmit = (value: CreateCategoryFormReturnType) => {
    onSubmit(value)
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      enableReinitialize>
      <Form style={{ display: 'flex', gap: '20px', width: '100%' }} id={linkageToForm}>
        <Stack direction="row" sx={{ width: '100%', gap: '20px', height: 'fit-content' }}>
          <CreateCategoryPicture />
          <Stack sx={{ width: '100%' }}>
            <Input placeholder="Category" name="title" label="Category" />
          </Stack>
        </Stack>
      </Form>
    </Formik>
  )
}

export default CreateDishCategoryForm
