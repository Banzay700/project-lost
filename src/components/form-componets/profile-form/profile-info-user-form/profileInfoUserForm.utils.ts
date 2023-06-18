import { object, string } from 'yup'
import { validateUser } from 'utils'

export const validationSchema = object().shape({
  firstName: validateUser.firstName(),
  secondName: validateUser.secondName(),
  email: validateUser.email(),
  phoneNumber: validateUser.phoneNumber(),
  description: string(),
})
