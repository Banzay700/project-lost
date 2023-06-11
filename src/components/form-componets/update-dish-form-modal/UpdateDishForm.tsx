import { FC, useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import { InputsCreateDish } from 'components'
import { DishPartialType, DishType } from 'types'
import { Stack } from '@mui/material'
import { ImageDragDrop } from './image-drag-drop'

interface FormCreateDishProps {
  initialValues: DishType
  linkageToForm: string
  onSubmit: (value: DishPartialType) => void
}

const UpdateDishForm: FC<FormCreateDishProps> = ({ initialValues, linkageToForm, onSubmit }) => {
  const { category, additionalFood, bonus, ...values } = initialValues

  const [formValues, setFormValues] = useState(values)

  useEffect(() => {
    setFormValues(values)
  }, [values])

  const handleSubmit = (value: DishPartialType) => {
    onSubmit(value)
  }

  return (
    <Formik initialValues={formValues} onSubmit={handleSubmit} enableReinitialize>
      <Form style={{ display: 'flex', gap: '20px', width: '100%' }} id={linkageToForm}>
        <ImageDragDrop
          defaultPicture={initialValues.picture || ''}
          pictureAlt={initialValues.title || ''}
        />
        <Stack sx={{ gap: '20px' }}>
          <InputsCreateDish />
        </Stack>
      </Form>
    </Formik>
  )
}

export default UpdateDishForm
