import { FC } from 'react'
import { Stack } from '@mui/material'
import { calculateValues } from './orderSummaryWrapper.utils'
import OrderSummary from './order-summary/OrderSummary'

interface OrderSummaryWrapperProps {
  tax: number
  total: number
  paymentMethod?: string
  tip?: string
  email?: string
}

const OrderSummaryWrapper: FC<OrderSummaryWrapperProps> = (props) => {
  const { total, tax, paymentMethod, tip, email } = props
  const { taxValue, totalValue } = calculateValues(total, tax)
  return (
    <Stack sx={{ gap: '16px' }}>
      <Stack sx={{ gap: '12px', pb: '16px', borderBottom: '1px dashed #e4e4e4' }}>
        <OrderSummary text="Sub Total" value={`$ ${totalValue}`} />
        {!!tip && <OrderSummary text="Tip Amount" value={`$ ${tip}`} />}
        <OrderSummary text={`Tax (${tax}%)`} value={`$ ${taxValue}`} />
      </Stack>
      <OrderSummary text="Total" value={`$ ${totalValue}`} />
      {paymentMethod && <OrderSummary text="Payment Method" value={paymentMethod} />}
      {email && <OrderSummary text="Email" value={email} />}
    </Stack>
  )
}

export default OrderSummaryWrapper
