interface CommonTableData {
  orderID?: string
  orderType: 'takeAway' | 'dineIn' | 'delivery' | undefined
  orderNumber: string | undefined
  table?: string
  totalPrice?: number
  description?: string
}

export interface Dishes {
  amount: number
  dishID: string
  dishTotalPrice: number
}

export interface DishesBills {
  dishID: string
  amount: number
  title?: string
  price: number
}

export interface TableDataOrders extends CommonTableData {
  dishes?: Dishes[]
}

export interface TableDataBills extends CommonTableData {
  dishes?: DishesBills[]
  status?: 'opened' | 'closed'
  tip?: number
  email?: string
  paymentMethod?: string
}

export type TableData = TableDataBills | TableDataOrders
