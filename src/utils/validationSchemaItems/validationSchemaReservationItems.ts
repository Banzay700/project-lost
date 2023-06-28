import { number, string } from 'yup'

// TODO: organize schemes in fn

export const reservationSchemaItems = {
  date: string().required("Date can't be empty"),
  hours: number().integer().min(0).max(24).required(),
  minutes: number().integer().min(0).max(60).required(),
}

const hours = (isRequired?: boolean) => {
  const schema = number()
    .integer()
    .min(9, 'Too early, work hours starts at 9:00')
    .max(23, 'Too late, work hours ends at 23:00')

  return isRequired ? schema.required('Hours is required') : schema
}

const minutes = (isRequired?: boolean) => {
  const schema = number()
    .integer()
    .min(0, 'Minutes can not be less than 0')
    .max(60, 'Minutes can not be more than 60')

  return isRequired ? schema.required('Minutes is required') : schema
}

const date = (isRequired?: boolean) => {
  const schema = string().required('Date is required')

  return isRequired ? schema.required('Date is required') : schema
}

export const reservationValidationItems = { hours, minutes, date }
