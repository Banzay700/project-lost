import { number, string } from 'yup'

// TODO: organize schemes in fn

export const reservationSchemaItems = {
  date: string().required("Date can't be empty"),
  hours: number().integer().min(0).max(24).required(),
  minutes: number().integer().min(0).max(60).required(),
}
