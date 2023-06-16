import { CommonOrderBillsType } from 'types/OrderBillsType/CommonOrderBillsType'
import { OrderDishRequestType } from 'types/OrderBillsType/OrderDishRequestType'

export type OrderRequestType = CommonOrderBillsType & {
  user: string
  dishes: OrderDishRequestType[]
}
