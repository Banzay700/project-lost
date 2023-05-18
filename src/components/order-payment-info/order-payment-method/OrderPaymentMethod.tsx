import { FC } from 'react'
import { RadioGroup, Stack, Typography } from '@mui/material'
import { OrderPaymentMethodItemType } from 'types'
import { RadioIconInput } from 'UI'

interface OrderPaymentMethodProps {
  paymentMethodItems: OrderPaymentMethodItemType[]
}

const OrderPaymentMethod: FC<OrderPaymentMethodProps> = ({ paymentMethodItems }) => {
  const renderRadioItem = paymentMethodItems.map(({ value, icon, name }) => (
    <RadioIconInput key={value} value={value} name={name} icon={icon} />
  ))

  return (
    <Stack spacing="16px">
      <Typography variant="h2" component="p" color="secondary" fontWeight={600}>
        Payment method
      </Typography>
      <RadioGroup
        name="payment"
        row
        sx={{ gap: '16px', flexWrap: 'nowrap' }}
        defaultValue={paymentMethodItems[0].value}>
        {renderRadioItem}
      </RadioGroup>
    </Stack>
  )
}

export default OrderPaymentMethod
