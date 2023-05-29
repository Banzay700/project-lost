import { OrderDishResponseType } from 'types/OrderBillsType/OrderDishResponseType'

export type OrderDishActiveType = OrderDishResponseType & {
  dishID: string
  price?: number
  id?: string
}
