import { FC } from 'react'
import { Paper, Stack, Typography } from '@mui/material'
import { DeliveryFormType, OrderActiveType } from 'types/index'
import { OrderSummaryWrapper } from 'components/index'
import { DeliveryInfoTitle } from './DeliveryInfo.styled'

interface DeliveryInfoProps {
  data: OrderActiveType
  deliveryForm: DeliveryFormType | undefined
  tax: number
}

const DeliveryInfo: FC<DeliveryInfoProps> = ({ data, deliveryForm, tax }) => {
  const total = data.dishes.reduce((acc, item) => acc + (item.dishTotalPrice ?? 0), 0)

  return (
    <Stack spacing={3.2} direction="row">
      <Paper sx={{ width: '50%', p: '16px', background: '#F8F9FD' }} elevation={2}>
        <DeliveryInfoTitle variant="h3" color="secondary">
          Notes
        </DeliveryInfoTitle>
        <Typography sx={{ overflowWrap: 'break-word' }}>
          {deliveryForm?.clientInfo.description || 'None'}
        </Typography>
      </Paper>
      <Stack spacing={3.2} sx={{ width: '50%' }} alignItems="end">
        <Stack sx={{ width: '70%' }}>
          <OrderSummaryWrapper tax={tax} total={total} />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default DeliveryInfo
