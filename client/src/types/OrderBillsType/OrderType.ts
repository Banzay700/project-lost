import { CommonOrderBillsType } from 'types/OrderBillsType/CommonOrderBillsType'
import { OrderDishType } from 'types/OrderBillsType/OrderDishType'

export type OrderType = CommonOrderBillsType & {
  dishes: OrderDishType[]
}
