interface IAdditionalFood {
  id?: string
  title: string
  price: number
  weight?: number
}

export type DishProductType = {
  id: string
  picture: string
  title: string
  price: number
  description: string
  category?: string
  subcategory?: string
  weight: number
  bonus?: number
  additionalFood?: IAdditionalFood[]
}
