import { FC } from 'react'
import { DetailsListTitle } from 'UI/details-title'
import { Stack } from '@mui/material'
import { IconCash, IconMasterCard, IconVisa } from 'assets'
import { OrderPaymentMethodItemType } from 'types/OrderPaymentMethodItemType'
import { OrderPricingTotalInfo } from './order-pricing-total-info'
import OrderPaymentMethod from './order-payment-method/OrderPaymentMethod'
import { OrderAdditionalInformation } from './order-additional-information'

interface OrderPaymentInfoProps {
  orderId: string
  totalAmount: number
  paymentMethodItems: OrderPaymentMethodItemType[]
}

const mockTestPayment: OrderPaymentMethodItemType[] = [
  {
    value: 'test',
    icon: <IconCash />,
    name: 'test',
  },
  {
    value: 'test2',
    icon: <IconMasterCard />,
    name: 'test',
  },
  {
    value: 'test3',
    icon: <IconVisa />,
    name: 'test',
  },
]

const OrderPaymentInfo: FC<OrderPaymentInfoProps> = ({
  orderId,
  totalAmount,
  paymentMethodItems,
}) => {
  return (
    <Stack>
      <DetailsListTitle title="Order payment" orderId={orderId} />
      <Stack spacing="32px" sx={{ p: '16px' }}>
        <OrderPricingTotalInfo totalAmount={totalAmount} />
        <OrderPaymentMethod paymentMethodItems={paymentMethodItems} />
        <OrderAdditionalInformation />
      </Stack>
    </Stack>
  )
}

export default OrderPaymentInfo
