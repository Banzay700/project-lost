import { FC, useState } from 'react'
import { Stack } from '@mui/material'

import { DetailsListTitle, ToggleMenu } from 'UI'
import { OrderPaymentFormValuesType } from 'types'
import { OrderPaymentForm } from './order-payment-form'
import { OrderButtonsGroup } from './order-buttons-group'
import { OrderPricingTotalInfo } from './order-total-info'
import { toggleMenuValues } from './orderPaymentBar.utils'

interface OrderPaymentBarProps {
  orderId: string
  totalAmount: number
}

const OrderPaymentBar: FC<OrderPaymentBarProps> = ({ orderId, totalAmount }) => {
  const [tipStatus, setTipStatus] = useState(false)
  const [emailStatus, setEmailStatus] = useState(false)

  const handleToggleTipStatus = () => setTipStatus((prevState) => !prevState)
  const handleToggleEmailStatus = () => setEmailStatus((prevState) => !prevState)

  const handleFormSubmit = (values: OrderPaymentFormValuesType) => {
    console.log(values)
  }

  const handleToggleMenuChange = (value: string) => {
    console.log(value)
  }

  return (
    <>
      <ToggleMenu menuItems={toggleMenuValues} onChange={handleToggleMenuChange} />
      <DetailsListTitle title="Order payment" orderId={orderId} />
      <Stack spacing="32px" sx={{ p: '16px', flex: 1 }}>
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

export default OrderPaymentBar
