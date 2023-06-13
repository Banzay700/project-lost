import { object, string } from 'yup'

export const validationSchema = object().shape({
  password: string()
    .matches(/^\S*$/, 'Password must not contain spaces')
    .matches(/\p{Lu}/u, 'Password must contain at least one uppercase letter')
    .matches(
      /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]*$/,
      'Password must contain at least one number and one special symbol',
    )
    .min(8, 'Too Short! Please enter no less than 8 symbols'),
})
