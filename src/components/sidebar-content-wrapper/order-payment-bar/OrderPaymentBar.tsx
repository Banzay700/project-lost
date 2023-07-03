import { FC } from 'react'
import { Stack } from '@mui/material'

import { DetailsListTitle, ToggleMenu } from 'UI'
import { useAppSelector, useBillsReducer } from 'hooks'
import {
  useLazySendEmailQuery,
  useUpdateBillMutation,
  useUpdateTableStatusMutation,
} from 'store/api'
import { PaymentFormReturnType } from 'types'
import { FadeIn } from 'utils'
import { PaymentListInfo } from './payment-list-info'
import { toggleMenuValues } from './orderPaymentBar.utils'
import { OrderListInfo } from './order-list-info'

const OrderPaymentBar: FC = () => {
  const { newBill, relocateBills, changeToggle } = useBillsReducer()
  const toggleValue = useAppSelector((state) => state.bills.toggleValue)
  const [updateBill] = useUpdateBillMutation()
  const [updateTableStatus] = useUpdateTableStatusMutation()
  const [sendEmail] = useLazySendEmailQuery()

  const buttonDisabled = newBill.status === 'closed'
  const detailsListTitle = toggleValue === 'Payment' ? 'Order payment' : 'Order info'

  const handleFormSubmit = (values: PaymentFormReturnType) => {
    updateBill({ ...newBill, ...values, status: 'closed' })
    relocateBills({ ...newBill, ...values, status: 'closed' })
    updateTableStatus(newBill.table)
    if (newBill.id) sendEmail(newBill.id)
    changeToggle('Order info')
  }

  return (
    <FadeIn styles={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <ToggleMenu
        menuItems={toggleMenuValues}
        onChange={changeToggle}
        defaultValue={toggleValue}
        buttonDisabled={buttonDisabled}
      />
      <Stack sx={{ height: 'calc(100% - 70px)' }}>
        <DetailsListTitle title={detailsListTitle} orderNumber={newBill.orderNumber} />
        {toggleValue === 'Payment' && (
          <PaymentListInfo onSubmit={handleFormSubmit} newBill={newBill} />
        )}
        {toggleValue === 'Order info' && <OrderListInfo newBill={newBill} />}
      </Stack>
    </FadeIn>
  )
}

export default OrderPaymentBar
