import { object, string } from 'yup'
import { validationUser } from 'utils'

export const validationSchema = object().shape({
  firstName: validationUser.name(true),
  secondName: validationUser.name(true),
  email: validationUser.email(),
  phoneNumber: validationUser.phoneNumber(true),
  description: string(),
})
