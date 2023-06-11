export type CreateDishFormReturnType = {
  category: string
  subcategory?: string
  newSubcategory?: string
  title: string
  price: string
  weight: string
  picture: File[] | string
  status: 'active' | 'inactive'
  description: string
  type: 'dish'
}
