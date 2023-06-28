import { object } from 'yup'
import { InputSelectItemType } from 'types'
import { validationUser, validationPicture } from 'utils'

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
  firstName: validationUser.name(true, 'First name is required'),
  secondName: validationUser.name(true, 'Second name is required'),
  email: validationUser.email(),
  phoneNumber: validationUser.phoneNumber(true),
  password: validationUser.password(true),
  role: validationUser.role(),
  picture: validationPicture,
})
