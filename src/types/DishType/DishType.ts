import { DishAdditionalFood } from './DishAdditionalFood'

export type DishType = {
  id: string
  picture: string
  type: string
  title: string
  price: number
  description: string
  category?: { title: string; id: string }
  status: 'active' | 'inactive'
  weight: number
  bonus?: number
  additionalFood?: DishAdditionalFood[]
}
