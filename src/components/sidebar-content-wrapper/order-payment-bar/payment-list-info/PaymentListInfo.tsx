import { Stack } from '@mui/material'
import { FC, useEffect, useState } from 'react'

import { PaymentFormCollectType, PaymentFormReturnType, BillsType } from 'types'
import { useLazySendEmailQuery } from 'store/api'
import { OrderPaymentForm } from './order-payment-form'
import { OrderButtonsGroup } from './order-buttons-group'
import { OrderPricingTotalInfo } from './order-total-info'

interface PaymentListInfoProps {
  onSubmit: (values: PaymentFormReturnType) => void
  newBill: BillsType
}

const PaymentListInfo: FC<PaymentListInfoProps> = ({ onSubmit, newBill }) => {
  const [tipStatus, setTipStatus] = useState(false)
  const [emailStatus, setEmailStatus] = useState(false)
  const [formData, setFormData] = useState<PaymentFormCollectType>()
  const [submittedBills, setSubmittedBills] = useState<BillsType>()
  const { orderNumber, totalPrice, id } = newBill
  const [sendEmail] = useLazySendEmailQuery()

  const handleFormSubmit = (values: PaymentFormReturnType) => {
    if (orderNumber && totalPrice && id) {
      onSubmit(values)
      setFormData({ ...values, orderNumber, totalPrice })
      setSubmittedBills({ ...newBill, ...values })
    }
  }

  useEffect(() => {
    if (submittedBills?.email && submittedBills.id) {
      sendEmail(submittedBills.id)
      console.log(submittedBills)
    }
  }, [sendEmail, submittedBills])

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

export default PaymentListInfo
