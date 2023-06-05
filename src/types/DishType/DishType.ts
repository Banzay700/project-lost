import { DishAdditionalFood } from './DishAdditionalFood'

export type DishType = {
  id: string
  picture: string
  type: string
  title: string
  price: number
  description: string
  category?: string
  weight: number
  bonus?: number
  additionalFood?: DishAdditionalFood[]
}
