import { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import { calculateValues } from './orderSummary.utils'

interface OrderSummaryProps {
  tax: number
  total: number
}

const OrderSummary: FC<OrderSummaryProps> = ({ total, tax }) => {
  const { taxValue, totalValue } = calculateValues(total, tax)

  return (
    <Stack sx={{ gap: '16px' }}>
      <Stack sx={{ gap: '12px', pb: '16px', borderBottom: '1px dashed #e4e4e4' }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h3">Sub Total</Typography>
          <Typography variant="h3" color="secondary">
            $ {total}
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h3">Tax ({tax}%)</Typography>
          <Typography variant="h3" color="secondary">
            $ {taxValue}
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h3">Total</Typography>
        <Typography variant="h3" color="primary">
          $ {totalValue}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default OrderSummary
