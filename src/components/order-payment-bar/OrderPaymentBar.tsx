import { FC, useState } from 'react'
import { Stack } from '@mui/material'

import { DetailsListTitle, ToggleMenu } from 'UI'
import { OrderPaymentFormValuesType } from 'types'
import { OrderPaymentForm } from './order-payment-form'
import { OrderButtonsGroup } from './order-buttons-group'
import { OrderPricingTotalInfo } from './order-total-info'
import { toggleMenuValues } from './orderPaymentBar.utils'

interface OrderPaymentBarProps {
  orderNumber: number
  totalAmount: number
}

const OrderPaymentBar: FC<OrderPaymentBarProps> = ({ orderNumber, totalAmount }) => {
  const [tipStatus, setTipStatus] = useState(false)
  const [emailStatus, setEmailStatus] = useState(false)

  const handleToggleTipStatus = () => setTipStatus((prevState) => !prevState)
  const handleToggleEmailStatus = () => setEmailStatus((prevState) => !prevState)

  const handleFormSubmit = (values: OrderPaymentFormValuesType) => {
    console.log(values, orderNumber, totalAmount)
  }

  const handleToggleMenuChange = (value: string) => {
    console.log(value)
  }

  return (
    <>
      <ToggleMenu
        menuItems={toggleMenuValues}
        onChange={handleToggleMenuChange}
        defaultValue="orderInfo"
      />
      <DetailsListTitle title="Order payment" orderNumber={orderNumber} />
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
