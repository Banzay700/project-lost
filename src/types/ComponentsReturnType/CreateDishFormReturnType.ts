export type CreateDishFormReturnType = {
  globalCategory?: string
  category: string
  title: string
  price: string
  weight: string
  picture?: File[] | string
  status: 'active' | 'inactive'
  description?: string
  type: 'dish'
}
