import { FC } from 'react'
import { Stack } from '@mui/material'
import { calculateTotalPriceWithTax } from 'utils'
import { OrderSummary } from './order-summary'

interface OrderSummaryWrapperProps {
  tax: number
  total: number
  paymentMethod?: string
  tip?: number
  email?: string
}

const OrderSummaryWrapper: FC<OrderSummaryWrapperProps> = (props) => {
  const { total, tax, paymentMethod, tip, email } = props
  const { taxValue, totalValue } = calculateTotalPriceWithTax(total, tax, tip)

  return (
    <Stack sx={{ gap: '16px' }}>
      <Stack sx={{ gap: '12px', pb: '16px', borderBottom: '1px dashed #e4e4e4' }}>
        <OrderSummary text="Sub Total" value={`$ ${total}`} />
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
