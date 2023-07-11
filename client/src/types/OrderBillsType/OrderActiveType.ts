import { CommonOrderBillsType } from './CommonOrderBillsType'
import { OrderDishActiveType } from './OrderDishActiveType'
import { OderStoreStatusType } from './OderStoreStatusType'

export type OrderActiveType = CommonOrderBillsType & {
  storeStatus: OderStoreStatusType
  dishes: OrderDishActiveType[]
  user?: string
}
