import { CommonOrderBillsType, BillsDishType } from 'types'

export type BillsType = CommonOrderBillsType & {
  orderID: string
  dishes?: BillsDishType[]
  tipAmount?: string
  email?: string
  paymentMethod?: string
}
