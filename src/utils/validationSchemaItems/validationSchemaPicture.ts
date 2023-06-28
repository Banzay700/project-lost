import { mixed, TestContext } from 'yup'

const FILE_MAX_SIZE = 6291456

export const validationPicture = mixed()
  .nullable()
  .test(
    'picture',
    'The file must be an image or less than 5 MB',
    function validatePicture(this: TestContext, value) {
      if (!value) return true

      const [file] = value as File[]

      if (!file.type.startsWith('image/')) {
        return false
      }

      return file.size <= FILE_MAX_SIZE
    },
  )
