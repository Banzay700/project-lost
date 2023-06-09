import { number, object, string } from 'yup'

export const initialValues = {
  paymentMethod: '',
  tip: '',
  email: '',
}

export const validationSchema = object().shape({
  paymentMethod: string().required(),
  tip: number().integer(),
  email: string().email(),
})
