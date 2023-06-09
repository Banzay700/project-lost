import { CommonOrderBillsType, BillsDishType } from 'types'

export type BillsType = CommonOrderBillsType & {
  orderID: string
  dishes?: BillsDishType[]
  tip?: string
  email?: string
  paymentMethod?: string
}
