import { array, number, object, string } from 'yup'

export const initialValues = {
  tags: [],
  date: '',
  hours: '',
  minutes: '',
  partySize: 0,
}

export const validationSchema = object().shape({
  tags: array(),
  date: string(),
  hours: number().integer().min(0).max(24),
  minutes: number().integer().min(0).max(60),
  partySize: number(),
})
