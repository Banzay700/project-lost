import { number, ref, string } from 'yup'

const title = (isRequired?: boolean) => {
  let schema = string().min(3).required('Please enter the product name')

  if (isRequired) {
    schema = schema.required('Product name is required')
  }

  return schema
}

const price = (isRequired?: boolean) => {
  let schema = number().typeError('Price must be a number').positive().min(1)

  if (isRequired) {
    schema = schema.required('Price is required')
  }
  schema = isRequired ? schema.required('Price is required') : schema
  return schema
}

const description = (isRequired?: boolean) => {
  let schema = string().min(10)

  if (isRequired) {
    schema = schema.required('Description is required')
  }

  return schema
}

const subcategories = string().test(
  'subcategory',
  'Please enter either subcategory or new category',
  function checkedNewCategory(subcategory) {
    const newCategory = this.resolve(ref('newSubcategory')) as string | undefined
    return !!subcategory || !!newCategory
  },
)

const category = (isRequired?: boolean) => {
  let schema = string()

  if (isRequired) {
    schema = schema.required('Category is required')
  }

  return schema
}

const weight = (isRequired?: boolean) => {
  let schema = number().typeError('Weight must be a number').positive()

  if (isRequired) {
    schema = schema.required('Weight is required')
  }

  return schema
}

const status = (isRequired?: boolean) => {
  let schema = string()

  if (isRequired) {
    schema = schema.required('Please enter your status')
  }
  return schema
}

export const validationDish = { title, price, description, subcategories, category, weight, status }
