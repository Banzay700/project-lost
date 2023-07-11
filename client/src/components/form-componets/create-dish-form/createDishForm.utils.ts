import { CreateDishFormReturnType } from 'types'
import { validationPicture, validationDish } from 'utils'
import { object, string } from 'yup'

export const initialValues: CreateDishFormReturnType = {
  category: '',
  subcategory: '',
  newSubcategory: '',
  title: '',
  price: '',
  weight: '',
  picture: '',
  status: 'active',
  description: '',
  type: 'dish',
}

export const validationSchema = object().shape({
  title: validationDish.title(true),
  type: string(),
  price: validationDish.price(true),
  picture: validationPicture,
  description: validationDish.description(),
  subcategory: validationDish.subcategories,
  category: validationDish.category(true),
  weight: validationDish.weight(true),
  status: validationDish.status(true),
})
