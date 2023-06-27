import { object } from 'yup'
import { validationUser } from 'utils'

export const initialValues = {
  userId: '',
  password: '',
}

export const validationSchema = object().shape({
  password: validationUser.password(true),
})
