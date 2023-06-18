import { mixed, TestContext } from 'yup'

export const validatePicture = mixed()
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
  )
