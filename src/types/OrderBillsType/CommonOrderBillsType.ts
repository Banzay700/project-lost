export type CommonOrderBillsType = {
  id?: string
  orderType: string
  table: string
  orderNumber: number
  totalPrice: number
  description?: string
  status?: 'opened' | 'closed'
}
