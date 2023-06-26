import { object, string } from 'yup'
import { validationUser } from 'utils'

export const validationSchema = object().shape({
  firstName: validationUser.name(),
  secondName: validationUser.name(),
  email: validationUser.email(),
  phoneNumber: validationUser.phoneNumber(),
  description: string(),
})
