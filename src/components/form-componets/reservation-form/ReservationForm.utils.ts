import { array, number, object, string } from 'yup'

export const initialValues = {
  tags: [],
  date: '',
  partySize: 0,
}

export const validationSchema = object().shape({
  tags: array(),
  date: string(),
  partySize: number(),
})

export type SetFormValues = string | number | string[] | Date
