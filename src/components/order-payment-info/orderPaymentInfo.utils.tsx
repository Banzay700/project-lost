import { OrderPaymentMethodItemType } from 'types'
import { IconCash, IconMasterCard, IconVisa } from 'assets'

export const paymentMethodItems: OrderPaymentMethodItemType[] = [
  {
    value: 'Cash',
    icon: <IconCash />,
  },
  {
    value: 'MasterCard',
    icon: <IconMasterCard />,
  },
  {
    value: 'Visa',
    icon: <IconVisa />,
  },
]
