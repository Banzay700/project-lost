import { FC } from 'react'
import {
  ActionsButton,
  InfoDelivery,
  OrderDetailList,
  OrderLayout,
  TotalPriceInfo,
} from 'components'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'UI'
import { Icon } from 'assets'
import { useGetByIDQuery, useUpdateDeliveryMutation } from 'store/api'
import { generateTimeString, calculateTotalPrice } from 'utils'
import { useUserReducer, useRootLocationPath } from 'hooks'

const CurrentOrderDeliveryMobilePage: FC = () => {
  const { currentOrder } = useParams()
  const { location } = useRootLocationPath()

  const { data } = useGetByIDQuery(currentOrder || '')
  const [updateDelivery, { isSuccess }] = useUpdateDeliveryMutation()

  const navigate = useNavigate()
  const { userState } = useUserReducer()

  const totalPrice = data && calculateTotalPrice(data.order.dishes)

  const handleTakeDelivery = () => {
    if (currentOrder) updateDelivery({ id: currentOrder, courier: userState.id })
  }

  if (isSuccess) navigate(`/${location}`)

  return (
    <OrderLayout titleHeader="Current order">
      {data && (
        <InfoDelivery
          deliveryAddress={data.address.street}
          orderNumber={data.order.orderNumber}
          clientName={data.clientInfo.name}
          readyToTime={generateTimeString(data.time)}>
          <Button variant="contained" size="small" icon={<Icon.MapMarker />} />
        </InfoDelivery>
      )}
      <OrderDetailList ordersDetail={data?.order} />
      <ActionsButton titleButton="Take Delivery" onSubmit={handleTakeDelivery}>
        <TotalPriceInfo totalPrice={totalPrice} paymentMethod={data?.clientInfo.paymentMethod} />
      </ActionsButton>
    </OrderLayout>
  )
}

export default CurrentOrderDeliveryMobilePage
