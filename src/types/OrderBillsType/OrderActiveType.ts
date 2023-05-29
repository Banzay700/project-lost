import { CommonOrderBillsType } from 'types/OrderBillsType/CommonOrderBillsType'
import { OrderDishActiveType } from 'types/OrderBillsType/OrderDishActiveType'

export type OrderActiveType = CommonOrderBillsType & {
  active: boolean
  dishes: OrderDishActiveType[]
}
