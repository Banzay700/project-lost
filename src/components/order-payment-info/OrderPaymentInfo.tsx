import { FC, useState } from 'react'
import { Stack } from '@mui/material'

import { DetailsListTitle } from 'UI'
import { OrderPaymentFormValuesType } from 'types'
import { OrderPaymentForm } from './order-payment-form'
import { OrderButtonsGroup } from './order-buttons-group'
import { OrderPricingTotalInfo } from './order-total-info'

interface OrderPaymentInfoProps {
  orderId: string
  totalAmount: number
}

const OrderPaymentInfo: FC<OrderPaymentInfoProps> = ({ orderId, totalAmount }) => {
  const [tipStatus, setTipStatus] = useState(false)
  const [emailStatus, setEmailStatus] = useState(false)

  const handleToggleTipStatus = () => setTipStatus((prevState) => !prevState)
  const handleToggleEmailStatus = () => setEmailStatus((prevState) => !prevState)

  const handleFormSubmit = (values: OrderPaymentFormValuesType) => {
    console.log(values)
  }

  return (
    <>
      <DetailsListTitle title="Order payment" orderId={orderId} />
      <Stack spacing="32px" sx={{ p: '16px' }}>
        <OrderPricingTotalInfo totalAmount={totalAmount} />
        <OrderPaymentForm isTip={tipStatus} isEmail={emailStatus} onSubmit={handleFormSubmit}>
          <OrderButtonsGroup
            setTipStatus={handleToggleTipStatus}
            setEmailStatus={handleToggleEmailStatus}
          />
        </OrderPaymentForm>
      </Stack>
    </>
  )
}

export default OrderPaymentInfo
