import { mixed, object, string, TestContext } from 'yup'
import { InputSelectItemType } from 'types'

export const selectMenuItems: InputSelectItemType[] = [
  {
    value: 'Waiter',
    title: 'Waiter',
  },
  {
    value: 'Admin',
    title: 'Admin',
  },
  {
    value: 'Courier',
    title: 'Courier',
  },
]
export const validationSchema = object().shape({
  firstName: string().required('Please enter your First name'),
  secondName: string().required('Please enter your Second name'),
  email: string().email('You entered the wrong email'),
  phoneNumber: string(),
  password: string().required('Please enter your Password'),
  role: string(),
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

        const maxSize = 5 * 1024 * 1024
        return file.size <= maxSize
      },
    ),
})
