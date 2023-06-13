import { object, string } from 'yup'

export const validationSchema = object().shape({
  firstName: string()
    .min(2, 'Too Short! Please enter no more than 20, and no less than 2')
    .max(20, 'Too Long! Please enter no more than 20, and no less than 2')
    .matches(/\p{Lu}/u, 'First Name must contain at least one uppercase letter')
    .required('Required'),
  secondName: string()
    .min(2, 'Too Short! Please enter no more than 20, and no less than 2')
    .max(20, 'Too Long! Please enter no more than 20, and no less than 2')
    .matches(/\p{Lu}/u, 'First Name must contain at least one uppercase letter')
    .required('Required'),
  email: string().email().required('Required'),
  phoneNumber: string().matches(/^\+?[1-9]\d{8,19}$/, 'Invalid phone number'),
  description: string(),
})
