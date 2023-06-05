import { OrderDishType } from 'types/OrderBillsType/OrderDishType'

export type OrderDishActiveType = OrderDishType & {
  dishID: string
  price?: number
  id?: string
}
