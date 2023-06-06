import { FC, useState } from 'react'
import { Stack } from '@mui/material'

import { DetailsListTitle, ToggleMenu } from 'UI'
import { useAppDispatch, useAppSelector, useBillsReducer, useSmoothScrollbar } from 'hooks'
import { PaymentFormReturnType, PaymentFormCollectType } from 'types'
import { FadeIn } from 'utils'
import { changeToggleValue } from 'store/reducers'
import { OrderPaymentForm } from './order-payment-form'
import { OrderButtonsGroup } from './order-buttons-group'
import { OrderPricingTotalInfo } from './order-total-info'
import { toggleMenuValues } from './orderPaymentBar.utils'

const OrderPaymentBar: FC = () => {
  const dispatch = useAppDispatch()
  const [tipStatus, setTipStatus] = useState(false)
  const [emailStatus, setEmailStatus] = useState(false)
  const [formData, setFormData] = useState<PaymentFormCollectType>()
  const { newBill } = useBillsReducer()
  const { orderNumber, totalPrice, dishes } = newBill
  const toggleValue = useAppSelector((state) => state.toggleValue.toggleValue)

  const handleToggleTipStatus = () => setTipStatus((prevState) => !prevState)
  const handleToggleEmailStatus = () => setEmailStatus((prevState) => !prevState)
  const containerRef = useSmoothScrollbar<HTMLDivElement>()

  const handleFormSubmit = (values: PaymentFormReturnType) => {
    if (orderNumber && totalPrice) {
      setFormData({ ...values, orderNumber, totalPrice })
    }
  }

  const handleToggleMenuChange = (value: string) => dispatch(changeToggleValue(value))

  return (
    <FadeIn styles={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <ToggleMenu
        menuItems={toggleMenuValues}
        onChange={handleToggleMenuChange}
        defaultValue={toggleValue}
      />
      <DetailsListTitle title="Order payment" orderNumber={orderNumber} />
      <Stack spacing="32px" sx={{ p: '16px', flex: 1 }}>
        {toggleValue === 'Payment' && (
          <>
            <OrderPricingTotalInfo totalPrice={totalPrice} tipAmount={formData?.tipAmount} />
            <OrderPaymentForm isTip={tipStatus} isEmail={emailStatus} onSubmit={handleFormSubmit}>
              <OrderButtonsGroup
                setTipStatus={handleToggleTipStatus}
                setEmailStatus={handleToggleEmailStatus}
              />
            </OrderPaymentForm>
          </>
        )}
        {/* {toggleValue === 'Order info' && ( */}
        {/*  <div ref={containerRef} style={{ overflowY: 'auto', flex: 1 }}> */}
        {/*    <Box style={{ height: '200px' }}> */}
        {/*      {dishes?.map(({ dishID, title, price, amount}) => ( */}
        {/*        <OrderDetailsItem */}
        {/*          key={dishID} */}
        {/*          id={dishID} */}
        {/*          title={title} */}
        {/*          total={price} */}
        {/*          amount={amount} */}
        {/*        /> */}
        {/*      ))} */}
        {/*    </Box> */}
        {/*  </div> */}
        {/* )} */}
      </Stack>
    </FadeIn>
  )
}

export default OrderPaymentBar
