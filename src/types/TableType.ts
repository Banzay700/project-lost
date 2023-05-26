interface CommonTableData {
  id?: string
  orderType: 'takeAway' | 'dineIn' | 'delivery'
  orderNumber: string
  table?: string
}
export interface Dishes {
  id: string
  amount: number
  dishID: string
  totalPrice: number
}

export interface DishesBills {
  id: string
  amount: number
  dishID: string
  price: number
}

export interface TableDataOrders extends CommonTableData {
  dishes?: Dishes[]
}

export interface TableDataBills extends CommonTableData {
  dishes?: DishesBills[]
  status?: 'opened' | 'closed'
  totalPrice: number
  tip: number
  email: string
  description?: string
}

export type TableData = TableDataBills | TableDataOrders
