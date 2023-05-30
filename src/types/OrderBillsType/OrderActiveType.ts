import { CommonOrderBillsType } from './CommonOrderBillsType'
import { OrderDishActiveType } from './OrderDishActiveType'
import { OrderStatusType } from './OrderStatusType'

export type OrderActiveType = CommonOrderBillsType & {
  status: OrderStatusType
  dishes: OrderDishActiveType[]
}
