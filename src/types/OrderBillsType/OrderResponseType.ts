import { CommonOrderBillsType } from 'types/OrderBillsType/CommonOrderBillsType'
import { OrderDishResponseType } from 'types/OrderBillsType/OrderDishResponseType'

export type OrderResponseType = CommonOrderBillsType & {
  dishes: OrderDishResponseType[]
}
