import { number, string } from 'yup'

const city = (isRequired?: boolean) => {
  let schema = string()
    .min(2, 'Too Short! 3-20 symbols')
    .max(50, 'Too Long! 3-20 symbols')
    .matches(/\p{Lu}/u, 'Address must contain at least one uppercase letter')
    .matches(
      /^[a-zA-Z0-9а-яА-ЯіІїЇєЄёЁ0-9\s]+$/,
      'Street must contain only letters (EN, UA, RS), numbers, and spaces',
    )

  if (isRequired) schema = schema.required('City is required')

  return schema
}

const street = (isRequired?: boolean) => {
  let schema = string()
    .min(2, 'Too Short! 3-50 symbols')
    .max(100, 'Too Long! 3-50 symbols')
    .matches(/\p{Lu}/u, 'Address must contain at least one uppercase letter')

  if (isRequired) schema = schema.required('Street is required')

  return schema
}

const house = (isRequired?: boolean, msg?: string) => {
  let schema = number().integer().positive()

  if (isRequired) schema = schema.required(msg)

  return schema
}

export const validationDelivery = {
  city,
  street,
  house,
}
