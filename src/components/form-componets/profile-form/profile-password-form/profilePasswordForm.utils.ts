import { validateUser } from 'utils'
import { object } from 'yup'

export const validationSchema = object().shape({
  password: validateUser.password(true),
})
