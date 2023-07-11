import { CreateCategoryFormReturnType } from 'types'
import { object, string } from 'yup'
import { validationPicture } from 'utils'

export const initialValues: CreateCategoryFormReturnType = {
  type: 'category',
  picture: '',
  title: '',
}

export const validationSchema = object().shape({
  title: string().required('Please enter category'),
  picture: validationPicture,
})
