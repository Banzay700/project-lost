import { CommonOrderBillsType, BillsDishType } from 'types'

export type BillsType = CommonOrderBillsType & {
  orderID: string
  dishes?: BillsDishType[]
  tip?: number
  email?: string
  paymentMethod?: string
}
