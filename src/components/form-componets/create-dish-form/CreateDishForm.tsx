import { FC } from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { Button } from 'UI/button'
import { InputsCreateDish } from 'components'
import { CreateDishFormReturnType } from 'types'
import { Box, Stack } from '@mui/material'
import { CreateDishCategoryFormItem } from './create-dish-category-form-item'
import { initialValues, validationSchema } from './createDishForm.utils'
import { CreateDishPictureFormItem } from './create-dish-picture-form-item'

interface CreateDishFormProps {
  onSubmit: (values: CreateDishFormReturnType) => void
}

const CreateDishForm: FC<CreateDishFormProps> = ({ onSubmit }) => {
  const handleSubmit = (
    value: CreateDishFormReturnType,
    { resetForm }: FormikHelpers<CreateDishFormReturnType>,
  ) => {
    // const { category, ...values } = value
    // onSubmit(values)
    console.log(value)
    // resetForm()
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
            <CreateDishCategoryFormItem />
          </Stack>
          <CreateDishPictureFormItem />
        </Stack>
        <Box sx={{ width: '400px' }}>
          <Button variant="contained" size="default" fullWidth>
            Submit
          </Button>
        </Box>
      </Form>
    </Formik>
  )
}

export default CreateDishForm
