export interface IDishes {
  id: string
  amount: number
  price: number
  src: string
  title: string
  totalPrice: number
}

interface IAdditionalFood {
  id?: string
  title: string
  price: number
  amount: number
}

interface IDeliveryDetails {
  id?: string
  phone: string
  name: string
  addresses: string
  email?: string
  dishID: string
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
