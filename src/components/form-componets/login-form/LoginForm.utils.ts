import { object, string } from 'yup'

export const initialValues = {
  userId: '',
  password: '',
}

export const validationSchema = object().shape({
  password: string().required('Password is required'),
})
