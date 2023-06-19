import { object, string } from 'yup'
import { validationUser } from 'utils'

export const validationSchema = object().shape({
  firstName: validationUser.firstName(),
  secondName: validationUser.secondName(),
  email: validationUser.email(),
  phoneNumber: validationUser.phoneNumber(),
  description: string(),
})
