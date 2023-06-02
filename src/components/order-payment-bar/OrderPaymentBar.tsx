import { FC, useState } from 'react'
import { Stack } from '@mui/material'

import { DetailsListTitle, ToggleMenu } from 'UI'
import { PaymentFormReturnType, PaymentFormCollectType } from 'types'
import { useOrderReducer } from 'hooks/useOrderReducer.hook'
import { FadeIn } from 'utils'
import { OrderPaymentForm } from './order-payment-form'
import { OrderButtonsGroup } from './order-buttons-group'
import { OrderPricingTotalInfo } from './order-total-info'
import { toggleMenuValues } from './orderPaymentBar.utils'

const OrderPaymentBar: FC = () => {
  const [tipStatus, setTipStatus] = useState(false)
  const [emailStatus, setEmailStatus] = useState(false)
  const [formData, setFormData] = useState<PaymentFormCollectType>()
  const {
    newBill: { orderNumber, totalPrice },
  } = useOrderReducer()

  const handleToggleTipStatus = () => setTipStatus((prevState) => !prevState)
  const handleToggleEmailStatus = () => setEmailStatus((prevState) => !prevState)

  const handleFormSubmit = (values: PaymentFormReturnType) => {
    if (orderNumber && totalPrice) {
      setFormData({ ...values, orderNumber, totalPrice })
      console.log({ ...values, orderNumber, totalPrice })
    }
  }

  const handleToggleMenuChange = (value: string) => {
    console.log(value)
  }

  return (
    <FadeIn styles={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <ToggleMenu
        menuItems={toggleMenuValues}
        onChange={handleToggleMenuChange}
        defaultValue="orderInfo"
      />
      <DetailsListTitle title="Order payment" orderNumber={orderNumber} />
      <Stack spacing="32px" sx={{ p: '16px', flex: 1 }}>
        <OrderPricingTotalInfo totalPrice={totalPrice} tipAmount={formData?.tipAmount} />
        <OrderPaymentForm isTip={tipStatus} isEmail={emailStatus} onSubmit={handleFormSubmit}>
          <OrderButtonsGroup
            setTipStatus={handleToggleTipStatus}
            setEmailStatus={handleToggleEmailStatus}
          />
        </OrderPaymentForm>
      </Stack>
    </FadeIn>
  )
}

export default OrderPaymentBar
