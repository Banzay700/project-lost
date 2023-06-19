import { validationUser } from 'utils'
import { object } from 'yup'

export const validationSchema = object().shape({
  password: validationUser.password(true),
})
