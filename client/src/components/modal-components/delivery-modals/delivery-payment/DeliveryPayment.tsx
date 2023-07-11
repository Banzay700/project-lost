import { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import { payment } from './deliveryPayment.utils'

interface DeliveryPaymentWrapperProps {
  paymentMethod: string | undefined
}

const DeliveryPayment: FC<DeliveryPaymentWrapperProps> = ({ paymentMethod }) => {
  const paymentComponent = payment.map((el) => el.method === paymentMethod && el.component)
  return (
    <Stack spacing={0.8}>
      <Typography>Payment method</Typography>
      {paymentComponent}
    </Stack>
  )
}

export default DeliveryPayment
