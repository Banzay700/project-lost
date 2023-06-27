import { FC } from 'react'
import { Box, Stack } from '@mui/material'
import { Form, Formik, FormikHelpers } from 'formik'

import { Button } from 'UI'
import { InputsCreateDish } from 'components'
import { CreateDishFormReturnType } from 'types'
import { CreateDishCategoryFormItem } from './create-dish-category-form-item'
import { initialValues, validationSchema } from './createDishForm.utils'
import { CreateDishPictureFormItem } from './create-dish-picture-form-item'

interface CreateDishFormProps {
  onSubmit: (values: CreateDishFormReturnType) => void
  createCategory: () => void
}

const CreateDishForm: FC<CreateDishFormProps> = ({ createCategory, onSubmit }) => {
  const handleSubmit = (
    value: CreateDishFormReturnType,
    { resetForm }: FormikHelpers<CreateDishFormReturnType>,
  ) => {
    onSubmit(value)
    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      <Form style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Stack direction="row" sx={{ width: '100%', gap: '20px' }}>
          <Stack sx={{ gap: '20px', width: '100%' }}>
            <InputsCreateDish />
            <Stack direction="row" sx={{ gap: '20px' }}>
              <CreateDishCategoryFormItem />
              <Box sx={{ width: '200px' }}>
                <Button
                  variant="contained"
                  size="medium"
                  fullWidth
                  onClick={createCategory}
                  type="button">
                  Create Category
                </Button>
              </Box>
            </Stack>
          </Stack>
          <CreateDishPictureFormItem />
        </Stack>
        <Box sx={{ width: '400px' }}>
          <Button variant="contained" size="medium" fullWidth>
            Submit
          </Button>
        </Box>
      </Form>
    </Formik>
  )
}

export default CreateDishForm
