import { Stack } from '@mui/material'
import { FC, useState } from 'react'

import { PaymentFormCollectType, PaymentFormReturnType, BillsType } from 'types'
import { OrderPaymentForm } from './order-payment-form'
import { OrderButtonsGroup } from './order-buttons-group'
import { OrderPricingTotalInfo } from './order-total-info'

interface OrderPaymentToggleInfoProps {
  onSubmit: (values: PaymentFormReturnType) => void
  newBill: BillsType
}

const PaymentToggleInfo: FC<OrderPaymentToggleInfoProps> = ({ onSubmit, newBill }) => {
  const [tipStatus, setTipStatus] = useState(false)
  const [emailStatus, setEmailStatus] = useState(false)
  const [formData, setFormData] = useState<PaymentFormCollectType>()

  const { orderNumber, totalPrice, id } = newBill

  const handleFormSubmit = (values: PaymentFormReturnType) => {
    if (orderNumber && totalPrice && id) {
      setFormData({ ...values, orderNumber, totalPrice })
      onSubmit(values)
    }
  }

  const handleToggleTipStatus = () => setTipStatus((prevState) => !prevState)
  const handleToggleEmailStatus = () => setEmailStatus((prevState) => !prevState)
  return (
    <Stack spacing="32px" sx={{ p: '16px', flex: 1 }}>
      <OrderPricingTotalInfo totalPrice={totalPrice} tipAmount={formData?.tipAmount} />
      <OrderPaymentForm isTip={tipStatus} isEmail={emailStatus} onSubmit={handleFormSubmit}>
        <OrderButtonsGroup
          setTipStatus={handleToggleTipStatus}
          setEmailStatus={handleToggleEmailStatus}
        />
      </OrderPaymentForm>
    </Stack>
  )
}

export default PaymentToggleInfo
