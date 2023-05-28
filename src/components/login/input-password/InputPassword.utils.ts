import { object, string } from 'yup'

export const initialValues = {
  password: '',
}

export const validationSchema = object().shape({
  password: string().required(),
})
