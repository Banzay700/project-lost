import { CommonOrderBillsType } from 'types/OrderBillsType/CommonOrderBillsType'
import { OrderDishRequestType } from 'types/OrderBillsType/OrderDishRequestType'

export type OrderRequestType = CommonOrderBillsType & {
  dishes: OrderDishRequestType[]
  user?: string
}
