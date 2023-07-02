import { FC } from 'react'
import { ActionsButton, OrderLayout, TotalPriceInfo, GoogleMap } from 'components'

const Direction: FC = () => {
  return (
    <OrderLayout titleHeader="Direction">
      <GoogleMap lat={1} lng={2} />
      <ActionsButton titleButton="Take Delivery" onSubmit={() => {}}>
        <TotalPriceInfo totalPrice={12} paymentMethod="Cash" />
      </ActionsButton>
    </OrderLayout>
  )
}

export default Direction
