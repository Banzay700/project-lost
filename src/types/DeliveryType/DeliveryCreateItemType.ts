import { DeliveryFormType } from './DeliveryFormType'

export type DeliveryCreateItemType = Omit<DeliveryFormType, 'time'> & {
  order: string
  status?: string
  time: number
}
