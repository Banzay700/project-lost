import { object, string } from 'yup'

export const initialValues = {
  password: null,
}

export const validationSchema = object().shape({
  password: string().required(),
})
