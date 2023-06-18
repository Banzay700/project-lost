import { FC } from 'react'
import { Form, Formik } from 'formik'
import { InputsCreateDish } from 'components'
import { DishPartialType, DishType } from 'types'
import { Stack } from '@mui/material'
import { ImageDragDrop } from './image-drag-drop'
import { validationSchema } from './updateDishForm.utils'

interface FormCreateDishProps {
  initialValues: DishType
  linkageToForm: string
  onSubmit: (value: DishPartialType) => void
}

const UpdateDishForm: FC<FormCreateDishProps> = ({ initialValues, linkageToForm, onSubmit }) => {
  const { category, additionalFood, picture, bonus, ...values } = initialValues

  const handleSubmit = (value: DishPartialType) => {
    onSubmit(value)
  }

  const formikConfig = {
    initialValues: values,
    validationSchema,
    onSubmit: handleSubmit,
  }

  return (
    <Formik {...formikConfig} enableReinitialize>
      <Form style={{ display: 'flex', gap: '20px', width: '100%' }} id={linkageToForm}>
        <ImageDragDrop defaultPicture={picture || ''} pictureAlt={initialValues.title || ''} />
        <Stack sx={{ gap: '20px' }}>
          <InputsCreateDish />
        </Stack>
      </Form>
    </Formik>
  )
}

export default UpdateDishForm
