import { OrderType, UserType } from 'types'
import { DeliveryFormType } from './DeliveryFormType'

export type DeliveryType = DeliveryFormType & {
  status: 'opened' | 'closed'
  order: OrderType
  bill?: string
  courier?: UserType
  id: string
}
