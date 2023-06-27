import { string } from 'yup'

const name = (isRequired?: boolean, msg?: string) => {
  let schema = string()
    .min(2, 'Too Short! Please enter no more than 20, and no less than 2')
    .max(20, 'Too Long! Please enter no more than 20, and no less than 2')
    .matches(/\p{Lu}/u, 'First Name must contain at least one uppercase letter')
    .matches(/^[a-zA-Z0-9а-яА-ЯіІїЇєЄёЁ\s]+$/, 'Enter only numbers or letters (EN, UA, RS)')

  if (isRequired) {
    schema = schema.required(msg)
  }

  return schema
}

const email = (isRequired?: boolean) => {
  let schema = string().email('You entered the wrong email')

  if (isRequired) {
    schema = schema.required('Email is required')
  }

  return schema
}

const password = (isRequired?: boolean) => {
  let schema = string()
    .matches(/^\S*$/, 'Password must not contain spaces')
    .min(3, 'Too Short! Please enter no less than 3 symbols')
    .max(15, 'Too Long! Please enter no more than 15 symbols')

  if (isRequired) {
    schema = schema.required('Password is required')
  }

  return schema
}

const phoneNumber = (isRequired?: boolean) => {
  let schema = string()
  // .matches(/^\+?[0-9]\d{8,19}$/, 'Invalid phone number') TODO: add phone validation
  if (isRequired) {
    schema = schema.required('Phone is required')
  }

  return schema
}

const role = (isRequired?: boolean) => {
  let schema = string().oneOf(['Admin', 'Waiter', 'Courier'])

  if (isRequired) {
    schema = schema.required('Role is required')
  }

  return schema
}

const status = (isRequired?: boolean) => {
  let schema = string().oneOf(['active', 'inactive'])

  if (isRequired) {
    schema = schema.required('Status is required')
  }

  return schema
}

export const validationUser = {
  name,
  email,
  password,
  phoneNumber,
  role,
  status,
}
