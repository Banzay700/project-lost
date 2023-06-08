import { number, object, string } from 'yup'

export const initialValues = {
  paymentMethod: '',
  tipAmount: '',
  email: '',
}

export const validationSchema = object().shape({
  paymentMethod: string().required(),
  tipAmount: number().integer(),
  email: string().email(),
})
