import { CreateDishFormReturnType } from 'types'
import { validatePicture, validateDish } from 'utils'
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
  title: validateDish.title(true),
  type: string(),
  price: validateDish.price(true),
  picture: validatePicture,
  description: validateDish.description(),
  subcategory: validateDish.subcategories,
  category: validateDish.category(true),
  weight: validateDish.weight(true),
  status: validateDish.status(true),
})
