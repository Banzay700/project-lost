import { Stack } from '@mui/material'
import { ChangeEvent, FC, useEffect, useState } from 'react'

import { PaymentFormReturnType, BillsType } from 'types'
import { useLazySendEmailQuery } from 'store/api'
import { OrderPaymentForm } from './order-payment-form'
import { OrderButtonsGroup } from './order-buttons-group'
import { OrderPricingTotalInfo } from './order-total-info'

interface PaymentListInfoProps {
  onSubmit: (values: PaymentFormReturnType) => void
  newBill: BillsType
}

const PaymentListInfo: FC<PaymentListInfoProps> = ({ onSubmit, newBill }) => {
  const [inputValue, setInputValue] = useState('')
  const [tipStatus, setTipStatus] = useState(false)
  const [emailStatus, setEmailStatus] = useState(false)
  const [submittedBills, setSubmittedBills] = useState<BillsType>()
  const [sendEmail] = useLazySendEmailQuery()
  const { orderNumber, totalPrice, id } = newBill

  const handleFormSubmit = (values: PaymentFormReturnType) => {
    if (orderNumber && totalPrice && id) {
      onSubmit(values)
      setSubmittedBills({ ...newBill, ...values })
    }
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)

  useEffect(() => {
    if (submittedBills?.email && submittedBills.id) {
      sendEmail(submittedBills.id)
    }
  }, [sendEmail, submittedBills])

  const handleToggleTipStatus = () => setTipStatus((prevState) => !prevState)
  const handleToggleEmailStatus = () => setEmailStatus((prevState) => !prevState)
  return (
    <Stack spacing="32px" sx={{ p: '16px', flex: 1 }}>
      <OrderPricingTotalInfo totalPrice={totalPrice} tipAmount={inputValue} />
      <OrderPaymentForm
        isTip={tipStatus}
        isEmail={emailStatus}
        onSubmit={handleFormSubmit}
        onInput={handleChange}>
        <OrderButtonsGroup
          setTipStatus={handleToggleTipStatus}
          setEmailStatus={handleToggleEmailStatus}
        />
      </OrderPaymentForm>
    </Stack>
  )
}

export default PaymentListInfo
