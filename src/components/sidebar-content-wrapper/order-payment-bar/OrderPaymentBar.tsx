import { FC } from 'react'

import { DetailsListTitle, ToggleMenu } from 'UI'
import { useAppDispatch, useAppSelector, useBillsReducer } from 'hooks'
import { changeToggleValue } from 'store/reducers'
import { useUpdateBillMutation } from 'store/api'
import { PaymentFormReturnType } from 'types'
import { FadeIn } from 'utils'
import { PaymentToggleInfo } from './payment-toggle-info'
import { toggleMenuValues } from './orderPaymentBar.utils'
import OrderToggleList from './order-toggle-list/OrderToggleList'

const OrderPaymentBar: FC = () => {
  const dispatch = useAppDispatch()
  const { newBill } = useBillsReducer()
  const [updateBill] = useUpdateBillMutation()
  const toggleValue = useAppSelector((state) => state.toggleValue.toggleValue)

  const buttonDisabled = newBill.status === 'closed'
  const detailsListTitle = toggleValue === 'Payment' ? 'Order payment' : 'Order info'

  const handleFormSubmit = (values: PaymentFormReturnType) =>
    updateBill({ ...newBill, ...values, status: 'closed' })

  const handleToggleMenuChange = (value: string) => dispatch(changeToggleValue(value))

  return (
    <FadeIn styles={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <ToggleMenu
        menuItems={toggleMenuValues}
        onChange={handleToggleMenuChange}
        defaultValue={toggleValue}
        buttonDisabled={buttonDisabled}
      />
      <DetailsListTitle title={detailsListTitle} orderNumber={newBill.orderNumber} />
      {toggleValue === 'Payment' && (
        <PaymentToggleInfo onSubmit={handleFormSubmit} newBill={newBill} />
      )}
      {toggleValue === 'Order info' && <OrderToggleList newBill={newBill} />}
    </FadeIn>
  )
}

export default OrderPaymentBar
