import { CommonOrderBillsType, BillsDishResponseType } from 'types'

export type BillsResponseType = CommonOrderBillsType & {
  dishes?: BillsDishResponseType[]
  status?: 'opened' | 'closed'
  tip?: number
  email?: string
  paymentMethod?: string
}
