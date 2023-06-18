import { object } from 'yup'
import { validateDish, validatePicture } from 'utils'

export const validationSchema = object().shape({
  title: validateDish.title(),
  price: validateDish.price(),
  weight: validateDish.weight(),
  status: validateDish.status(),
  description: validateDish.description(),
  picture: validatePicture,
})
