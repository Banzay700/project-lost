import { number, ref, string } from 'yup'

const title = (isRequired?: boolean) => {
  const schema = string().min(3).required('Please enter the product name')

  return isRequired ? schema.required('Product name is required') : schema
}

const price = (isRequired?: boolean) => {
  const schema = number().typeError('Price must be a number').positive().min(1)

  return isRequired ? schema.required('Price is required') : schema
}

const description = (isRequired?: boolean) => {
  const schema = string()
    .min(5, 'Too Short! Please enter no less than 5')
    .max(100, 'Too Long! Please enter no more than 100')

  return isRequired ? schema.required('Description is required') : schema
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
  const schema = string()

  return isRequired ? schema.required('Category is required') : schema
}

const weight = (isRequired?: boolean) => {
  const schema = number().typeError('Weight must be a number').positive()

  return isRequired ? schema.required('Weight is required') : schema
}

const status = (isRequired?: boolean) => {
  const schema = string()

  return isRequired ? schema.required('Status is required') : schema
}

export const validationDish = { title, price, description, subcategories, category, weight, status }
