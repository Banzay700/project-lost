import { object } from 'yup'
import { InputSelectItemType } from 'types'
import { validateUser, validatePicture } from 'utils'

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
  firstName: validateUser.firstName(true),
  secondName: validateUser.secondName(true),
  email: validateUser.email(),
  phoneNumber: validateUser.phoneNumber(),
  password: validateUser.password(true),
  role: validateUser.role(),
  picture: validatePicture,
})
