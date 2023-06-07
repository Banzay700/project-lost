import { DishAdditionalFood } from './DishAdditionalFood'

export type DishType = {
  id: string
  picture: string
  type: string
  title: string
  price: number
  description: string
  category: { title: string; id: string }
  status: 'active' | 'inactive'
  weight: number
  bonus?: number
  additionalFood?: DishAdditionalFood[]
}

export type DishUpdateInfo = Pick<DishType, 'title' | 'price' | 'description' | 'status' | 'weight'>

export type DishIdType = Pick<DishType, 'id'>
export type DishPicture = {
  picture?: File[] | string
}
export type DishPartialType = DishIdType & DishUpdateInfo & DishPicture
