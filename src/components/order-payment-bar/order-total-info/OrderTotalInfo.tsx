import { FC } from 'react'
import { Stack, Typography } from '@mui/material'

interface OrderPricingTotalInfoProps {
  tipAmount?: string
  totalPrice: number
}

const OrderTotalInfo: FC<OrderPricingTotalInfoProps> = ({ tipAmount, totalPrice }) => {
  return (
    <Stack padding="16px" borderRadius="12px" bgcolor="#F8F9FD" spacing="8px">
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h2" component="p" color="secondary" fontWeight={400}>
          Tip Amount
        </Typography>
        <Typography variant="h2" component="p" color="secondary" fontWeight={600}>
          $ {tipAmount || 0}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h2" component="p" color="secondary" fontWeight={400}>
          Total Price
        </Typography>
        <Typography variant="h2" component="p" color="primary" fontWeight={600}>
          $ {totalPrice || 0}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default OrderTotalInfo
