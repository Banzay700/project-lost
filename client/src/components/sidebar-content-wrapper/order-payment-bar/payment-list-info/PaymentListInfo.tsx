import { Stack } from '@mui/material'
import { ChangeEvent, FC, useState } from 'react'

import { PaymentFormReturnType, BillsType } from 'types'
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
  const totalPrice = newBill.totalPrice + Number(inputValue)

  const handleFormSubmit = (values: PaymentFormReturnType) => onSubmit(values)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)
  const handleToggleTipStatus = () => setTipStatus((prevState) => !prevState)
  const handleToggleEmailStatus = () => setEmailStatus((prevState) => !prevState)
  return (
    <Stack spacing="32px" sx={{ p: '16px', flex: 1 }}>
      <OrderPricingTotalInfo totalPrice={totalPrice} tipAmount={inputValue} />
      <OrderPaymentForm
        isTip={tipStatus}
        isEmail={emailStatus}
        onSubmit={handleFormSubmit}
        onChange={handleChange}>
        <OrderButtonsGroup
          setTipStatus={handleToggleTipStatus}
          setEmailStatus={handleToggleEmailStatus}
        />
      </OrderPaymentForm>
    </Stack>
  )
}

export default PaymentListInfo
