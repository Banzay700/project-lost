import { string } from 'yup'
import { REGEX } from 'utils/regex'

const name = (isRequired?: boolean, msg?: string) => {
  const schema = string()
    .min(2, 'Too Short! Please enter no less than 2')
    .max(20, 'Too Long! Please enter no more than 20')
    .matches(REGEX.ONE_UPPERCASE_LETTER, 'First Name must contain at least one uppercase letter')
    .matches(REGEX.ONLY_LETTERS, 'Enter letters and numbers only')

  return isRequired ? schema.required(msg) : schema
}

const email = (isRequired?: boolean) => {
  const schema = string().email('You entered the wrong email')

  return isRequired ? schema.required('Email is required') : schema
}

const password = (isRequired?: boolean) => {
  const schema = string()
    .matches(REGEX.NO_SPACES, 'Password must not contain spaces')
    .min(3, 'Too Short! Please enter no less than 3 symbols')
    .max(15, 'Too Long! Please enter no more than 15 symbols')

  return isRequired ? schema.required('Password is required') : schema
}

const phoneNumber = (isRequired?: boolean) => {
  const schema = string()
    .min(17, "Phone number can't be less than 11 symbols")
    .max(18, "Phone number can't be more than 12 symbols")
    .matches(REGEX.PHONE_NUMBER, 'Invalid phone number')

  return isRequired ? schema.required('Phone is required') : schema
}

const role = (isRequired?: boolean) => {
  const schema = string().oneOf(['Admin', 'Waiter', 'Courier'])

  return isRequired ? schema.required('Role is required') : schema
}

const status = (isRequired?: boolean) => {
  const schema = string().oneOf(['active', 'inactive'])

  return isRequired ? schema.required('Status is required') : schema
}

export const validationUser = { name, email, password, phoneNumber, role, status }
