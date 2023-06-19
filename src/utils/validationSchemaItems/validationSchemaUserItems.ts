import { string } from 'yup'

const firstName = (isRequired?: boolean) => {
  let schema = string()
    .min(2, 'Too Short! Please enter no more than 20, and no less than 2')
    .max(20, 'Too Long! Please enter no more than 20, and no less than 2')
    .matches(/\p{Lu}/u, 'First Name must contain at least one uppercase letter')

  if (isRequired) {
    schema = schema.required('First Name is required')
  }

  return schema
}

const secondName = (isRequired?: boolean) => {
  let schema = string()
    .min(2, 'Too Short! Please enter no more than 20, and no less than 2')
    .max(20, 'Too Long! Please enter no more than 20, and no less than 2')
    .matches(/\p{Lu}/u, 'First Name must contain at least one uppercase letter')

  if (isRequired) {
    schema = schema.required('Second Name is required')
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
    // .matches(/\p{Lu}/u, 'Password must contain at least one uppercase letter')
    // .matches(
    //   /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]*$/,
    //   'Password must contain at least one number and one special symbol',
    // )
    .min(3, 'Too Short! Please enter no less than 3 symbols')

  if (isRequired) {
    schema = schema.required('Password is required')
  }

  return schema
}

const phoneNumber = (isRequired?: boolean) => {
  let schema = string().matches(/^\+?[1-9]\d{8,19}$/, 'Invalid phone number')

  if (isRequired) {
    schema = schema.required('Password is required')
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
  firstName,
  secondName,
  email,
  password,
  phoneNumber,
  role,
  status,
}
