import { ModifiedDishesType } from './ModifiedDishesType'

export type ModifiedDataType = {
  orderID: string | undefined
  totalPrice: number
  dishes: ModifiedDishesType[]
}
