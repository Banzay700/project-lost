import { FC } from 'react'
import { ActionsButton, OrderLayout, TotalPriceInfo, GoogleMap } from 'components'

const Direction: FC = () => {
  return (
    <OrderLayout titleHeader="Direction">
      <GoogleMap lat={50.52073439999999} lng={30.2461634} mapActions={{ mapTypeControl: false }} />
      <ActionsButton titleButton="Take Delivery" onSubmit={() => {}}>
        <TotalPriceInfo totalPrice={12} paymentMethod="Cash" />
      </ActionsButton>
    </OrderLayout>
  )
}

export default Direction
