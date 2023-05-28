export interface IDishes {
  id: string
  dishID?: number
  amount: number
  price: number
  title: string
  dishTotalPrice: number
}

export interface IOrder {
  id?: string
  orderType: 'takeaway' | 'dine-in' | 'delivery'
  orderNumber: string
  table?: string
  dishes?: IDishes[]
  description?: string
}

export type RequiredIdOrder = {
  id: string
} & Partial<IOrder>
