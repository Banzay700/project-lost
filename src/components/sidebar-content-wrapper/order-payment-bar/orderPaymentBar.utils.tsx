import { IconCash, IconMasterCard, IconVisa } from 'assets/index'
import { PaymentMethodItemType } from 'types/index'

export const paymentMethodItems: PaymentMethodItemType[] = [
  { value: 'Cash', icon: <IconCash /> },
  { value: 'MasterCard', icon: <IconMasterCard /> },
  { value: 'Visa', icon: <IconVisa /> },
]

export const toggleMenuValues = [
  { label: 'Order info', value: 'Order info' },
  { label: 'Payment', value: 'Payment' },
]
