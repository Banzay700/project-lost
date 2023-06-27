import { FC } from 'react'
import { Form, Formik } from 'formik'
import { Stack } from '@mui/material'
import { Input } from 'UI'
import { CreateCategoryFormReturnType } from 'types'
import { CreateCategoryPicture } from './create-category-picture'
import { initialValues, validationSchema } from './createDishCategoryForm.utils'
import { FormInputsWrapper } from './CreateDishCategoryForm.styled'

interface CreateDishCategoryFormProps {
  linkageToForm: string
  onSubmit: (value: CreateCategoryFormReturnType) => void
}

const CreateDishCategoryForm: FC<CreateDishCategoryFormProps> = ({ linkageToForm, onSubmit }) => {
  const handleSubmit = (value: CreateCategoryFormReturnType) => onSubmit(value)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      enableReinitialize>
      <Form style={{ display: 'flex', gap: '20px', width: '100%' }} id={linkageToForm}>
        <FormInputsWrapper>
          <CreateCategoryPicture />
          <Stack sx={{ width: '100%' }}>
            <Input placeholder="Category" name="title" label="Category" />
          </Stack>
        </FormInputsWrapper>
      </Form>
    </Formik>
  )
}

export default CreateDishCategoryForm
