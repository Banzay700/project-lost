import { FC } from 'react'
import { Form, Formik } from 'formik'

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
          <Input placeholder="Category" name="title" label="Category" />
        </FormInputsWrapper>
      </Form>
    </Formik>
  )
}

export default CreateDishCategoryForm
