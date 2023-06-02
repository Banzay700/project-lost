import { ChangeEvent, FC } from 'react'
import { FormControl, RadioGroup, Stack, Typography } from '@mui/material'
import { useFormikContext } from 'formik'

import { RadioIconInput } from 'UI/index'
import { paymentMethodItems } from '../../orderPaymentBar.utils'

interface OrderPaymentMethodProps {
  name: string
}

const OrderPaymentMethod: FC<OrderPaymentMethodProps> = ({ name }) => {
  const { setFieldValue } = useFormikContext()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(name, event.target.value)
  }

  const renderRadioItem = paymentMethodItems.map(({ value, icon }) => (
    <RadioIconInput key={value} value={value} icon={icon} />
  ))

  return (
    <Stack spacing="16px">
      <Typography variant="h2" component="p" color="secondary" fontWeight={600}>
        Payment method:
      </Typography>
      <FormControl fullWidth>
        <RadioGroup onChange={handleChange}>
          <Stack direction="row" spacing={2}>
            {renderRadioItem}
          </Stack>
        </RadioGroup>
      </FormControl>
    </Stack>
  )
}

export default OrderPaymentMethod
