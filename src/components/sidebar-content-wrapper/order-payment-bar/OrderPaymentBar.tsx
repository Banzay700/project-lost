import { FC } from 'react'

import { DetailsListTitle, ToggleMenu } from 'UI'
import { useAppDispatch, useAppSelector, useBillsReducer, useUserReducer } from 'hooks'
import { changeToggleValue } from 'store/reducers'
import { useUpdateBillMutation } from 'store/api'
import { PaymentFormReturnType } from 'types'
import { FadeIn } from 'utils'
import { PaymentListInfo } from './payment-list-info'
import { toggleMenuValues } from './orderPaymentBar.utils'
import { OrderListInfo } from './order-list-info'

const OrderPaymentBar: FC = () => {
  const dispatch = useAppDispatch()
  const { userState } = useUserReducer()
  const { newBill, relocateBills } = useBillsReducer()
  const [updateBill] = useUpdateBillMutation()
  const toggleValue = useAppSelector((state) => state.toggleValue.toggleValue)

  const { firstName, secondName } = userState
  const buttonDisabled = newBill.status === 'closed'
  const detailsListTitle = toggleValue === 'Payment' ? 'Order payment' : 'Order info'
  const handleToggleMenuChange = (value: string) => dispatch(changeToggleValue(value))

  const handleFormSubmit = (values: PaymentFormReturnType) => {
    updateBill({ ...newBill, ...values, status: 'closed' })
    relocateBills({ ...newBill, ...values, status: 'closed' })
    handleToggleMenuChange('Order info')
  }

  return (
    <FadeIn styles={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <ToggleMenu
        menuItems={toggleMenuValues}
        onChange={handleToggleMenuChange}
        defaultValue={toggleValue}
        buttonDisabled={buttonDisabled}
      />
      <DetailsListTitle
        title={detailsListTitle}
        orderNumber={newBill.orderNumber}
        staffName={firstName}
        staffSurname={secondName}
      />
      {toggleValue === 'Payment' && (
        <PaymentListInfo onSubmit={handleFormSubmit} newBill={newBill} />
      )}
      {toggleValue === 'Order info' && <OrderListInfo newBill={newBill} />}
    </FadeIn>
  )
}

export default OrderPaymentBar
