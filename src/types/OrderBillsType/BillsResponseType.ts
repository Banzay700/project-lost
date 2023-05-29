import { CommonOrderBillsType, OrderResponseType } from 'types/OrderBillsType/index'
import { BillsDishResponseType } from 'types/OrderBillsType/BillsDishResponseType'

export type BillsResponseType = CommonOrderBillsType & {
  dishes?: BillsDishResponseType[]
  status?: 'opened' | 'closed'
  tip?: number
  email?: string
  paymentMethod?: string
}
