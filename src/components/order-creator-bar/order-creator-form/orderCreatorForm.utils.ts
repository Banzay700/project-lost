import { object, string } from 'yup'

export const MAIN_ORDER_TYPE = 'dineIn'

export const initialValue = {
  orderType: '',
  table: '',
}

export const validationSchema = object().shape({
  orderType: string().required(),
  table: string(),
})
