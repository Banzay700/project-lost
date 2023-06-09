import { CreateDishFormReturnType } from 'types'
import { mixed, number, object, string, TestContext } from 'yup'

export const initialValues: CreateDishFormReturnType = {
  globalCategory: '',
  category: '',
  title: '',
  price: '',
  weight: '',
  picture: '',
  status: 'active',
  description: '',
  type: 'dish',
}

export const validationSchema = object().shape({
  title: string().min(3).required('Please enter the product name'),
  type: string(),
  price: number()
    .typeError('Weight must be a number')
    .positive()
    .min(1)
    .required('Please enter the normal price'),
  picture: mixed()
    .nullable()
    .test(
      'picture',
      'The file must be an image or less than 5 MB',
      function validatePicture(this: TestContext, value) {
        if (!value) return true

        const files = value as File[]

        const file = files[0]

        if (!file.type.startsWith('image/')) {
          return false
        }

        const maxSize = 6 * 1024 * 1024
        return file.size <= maxSize
      },
    ),
  description: string().min(10),
  category: string().required('Please enter the category'),
  globalCategory: string().required('Please enter category'),
  weight: number()
    .typeError('Weight must be a number')
    .positive()
    .required('Please enter the normal weight'),
  status: string().required('Please enter your status'),
})
