import { number, string } from 'yup'
import { REGEX } from 'utils'

const city = (isRequired?: boolean) => {
  const schema = string()
    .min(2, 'Too Short! 3-20 symbols')
    .max(50, 'Too Long! 3-20 symbols')
    .matches(REGEX.ONE_UPPERCASE_LETTER, 'Address must contain at least one uppercase letter')
    .matches(REGEX.NO_SYMBOLS, 'Street must contain only letters, numbers and spaces')

  return isRequired ? schema.required('City is required') : schema
}

const street = (isRequired?: boolean) => {
  const schema = string()
    .min(2, 'Too Short! 3-50 symbols')
    .max(100, 'Too Long! 3-100 symbols')
    .matches(REGEX.ONE_UPPERCASE_LETTER, 'Street must contain at least one uppercase letter')

  return isRequired ? schema.required('Street is required') : schema
}

const house = (isRequired?: boolean, msg?: string) => {
  const schema = number().integer().positive()

  return isRequired ? schema.required(msg) : schema
}

export const validationDelivery = {
  city,
  street,
  house,
}
