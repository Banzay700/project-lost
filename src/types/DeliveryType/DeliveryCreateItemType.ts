import { DeliveryFormType } from './DeliveryFormType'

export type DeliveryCreateItemType = {
  order: string
  time: string
} & DeliveryFormType
