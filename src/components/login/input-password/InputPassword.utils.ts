import { object, string } from 'yup'

export const initialValues = {
  id: '',
  password: '',
}

export const validationSchema = object().shape({
  password: string().required(),
})
