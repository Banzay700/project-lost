import { object, string } from 'yup'

export const initialValues = {
  orderType: '',
  table: '',
}

export const validationSchema = object().shape({
  orderType: string().required(),
  table: string(),
})
