import { PaymentFormReturnType } from './PaymentFormReturnType'

export type PaymentFormCollectType = PaymentFormReturnType & {
  orderNumber: number
  totalPrice: number
}
