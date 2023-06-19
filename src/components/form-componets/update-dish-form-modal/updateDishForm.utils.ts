import { object } from 'yup'
import { validationDish, validationPicture } from 'utils'

export const validationSchema = object().shape({
  title: validationDish.title(),
  price: validationDish.price(),
  weight: validationDish.weight(),
  status: validationDish.status(),
  description: validationDish.description(),
  picture: validationPicture,
})
