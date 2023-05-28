interface CommonTableData {
  id?: string
  orderType: 'takeAway' | 'dineIn' | 'delivery'
  orderNumber: string
  table?: string
  description?: string
}

export interface Dishes {
  id?: string
  amount: number
  dishID: string
  picture?: string
  dishTotalPrice?: number
}

export interface DishesBills {
  id?: string
  dishID: string
  amount: number
  price: number
  title?: string
}

export interface TableDataOrders extends CommonTableData {
  dishes?: Dishes[] | undefined
  totalPrice?: number
}

export interface TableDataBills extends CommonTableData {
  totalPrice: number
  dishes?: DishesBills[]
  status?: 'opened' | 'closed'
  tip?: number
  email?: string
  paymentMethod?: string
}

export type TableData = TableDataBills | TableDataOrders
