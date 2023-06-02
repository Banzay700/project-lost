import { CommonOrderBillsType, BillsDishResponseType } from 'types'

export type BillsResponseType = CommonOrderBillsType & {
  orderID: string
  dishes?: BillsDishResponseType[]
  tip?: number
  email?: string
  paymentMethod?: string
}
