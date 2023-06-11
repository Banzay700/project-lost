import { array, number, object, string } from 'yup'

export const initialValues = {
  tags: [''],
  date: '',
  hours: '',
  minutes: '',
  partySize: 0,
  name: '',
  email: '',
  phoneNumber: '',
  note: '',
}

export const validationSchema = object().shape({
  tags: array(),
  date: string().required(),
  hours: number().integer().min(0).max(24).required(),
  minutes: number().integer().min(0).max(60).required(),
  partySize: number(),
  name: string().required(),
  email: string().email(),
  phoneNumber: string().min(10),
  note: string(),
})
