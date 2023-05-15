interface IAdditionalFood {
  id?: string
  title: string
  price: number
  weight?: number
}

export interface IDish {
  id?: string
  title: string
  price: number
  picture: string
  description: string
  category: string
  subcategory?: string
  weight: number
  bonus?: number
  additionalFood?: IAdditionalFood[]
}

export type RequiredIdDish = {
  id: string
} & Partial<IDish>

export type DataCategoryType = {
  category: string
  picture: string
}
