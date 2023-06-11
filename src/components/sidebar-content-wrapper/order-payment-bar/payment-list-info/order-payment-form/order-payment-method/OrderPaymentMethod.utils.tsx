import { Icon } from 'assets'
import { PaymentMethodItemType } from 'types'

export const paymentMethodItems: PaymentMethodItemType[] = [
  { value: 'Cash', icon: <Icon.Cash /> },
  { value: 'MasterCard', icon: <Icon.MasterCard /> },
  { value: 'Visa', icon: <Icon.Visa /> },
]
