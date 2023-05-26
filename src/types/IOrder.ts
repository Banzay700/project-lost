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
}

export interface IOrder {
  id?: string
  status: boolean
  diningOptions: string
  orderNumber: string
  totalPrice: number
  paymentMethod: string
  tipAmount?: number
  tableTitle?: string
  dishes?: IDishes[]
  additionalFood?: IAdditionalFood[]
  deliveryDetails?: IDeliveryDetails
  email?: string
  notes?: string
}

export type RequiredIdOrder = {
  id: string
} & Partial<IOrder>
