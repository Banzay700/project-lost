import { CreateCategoryFormReturnType } from 'types'
import { mixed, object, string, TestContext } from 'yup'

export const initialValues: CreateCategoryFormReturnType = {
  type: 'category',
  picture: '',
  title: '',
}

export const validationSchema = object().shape({
  title: string().required('Please enter category'),
  picture: mixed().test(
    'picture',
    'The file must be an image or less than 2 MB',
    function validatePicture(this: TestContext, value) {
      if (!value) return true

      const files = value as File[]

      const file = files[0]

      if (!file.type.startsWith('image/')) {
        return false
      }

      const maxSize = 2 * 1024 * 1024
      return file.size <= maxSize
    },
  ),
})
