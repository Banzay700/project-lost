import { DishAdditionalFood } from './DishAdditionalFood'

type CategoryType = {
  title: string
  id: string
  parent: {
    id: string
    title: string
  }
}

export type DishType = {
  id: string
  picture: string
  type: string
  title: string
  price: number
  description: string
  category: CategoryType
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
