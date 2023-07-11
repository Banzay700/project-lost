import { FC, useEffect } from 'react'
import {
  ActionsButton,
  InfoDelivery,
  OrderDetailList,
  OrderLayout,
  TotalPriceInfo,
} from 'components'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, InfoDeliverySkeleton } from 'UI'
import { Icon } from 'assets'
import { useGetByIDQuery, useUpdateDeliveryMutation } from 'store/api'
import { generateTimeString, calculateTotalPrice } from 'utils'
import { useUserReducer, useRootLocationPath, useScreenTracking } from 'hooks'
import { ROUTES_DELIVERY } from 'routes/routes.utils'

const CurrentOrderDeliveryMobilePage: FC = () => {
  const { currentOrder } = useParams()
  const { location } = useRootLocationPath()
  const { isMobileScreen } = useScreenTracking()

  const { data, isFetching } = useGetByIDQuery(currentOrder || '')
  const [updateDelivery, { isSuccess }] = useUpdateDeliveryMutation()

  const navigate = useNavigate()
  const { userState } = useUserReducer()

  const totalPrice = data && calculateTotalPrice(data.order.dishes)

  const handleTakeDelivery = () => {
    if (currentOrder) updateDelivery({ id: currentOrder, courier: userState.id })
  }

  useEffect(() => {
    if (!isMobileScreen) {
      navigate(`/${location}`)
    }
    if (isSuccess) {
      navigate(`/${location}`)
    }
  }, [isMobileScreen, location, navigate, isSuccess])

  const handleOpenMap = () => {
    if (data && data.address.latitude && data.address.longitude) {
      const { latitude, longitude } = data.address
      navigate(`${ROUTES_DELIVERY.DIRECTION}?lat=${latitude}&lng=${longitude}`)
    }
  }

  return (
    <OrderLayout titleHeader="Current order">
      {!isFetching && data && (
        <InfoDelivery
          deliveryAddress={data.address.street}
          orderNumber={data.order.orderNumber}
          clientName={data.clientInfo.name}
          readyToTime={generateTimeString(data.time)}>
          <Button
            variant="contained"
            size="small"
            icon={<Icon.MapMarker />}
            onClick={handleOpenMap}
          />
        </InfoDelivery>
      )}
      {isFetching && <InfoDeliverySkeleton />}
      <OrderDetailList ordersDetail={data?.order} isLoading={isFetching} />
      <ActionsButton titleButton="Take Delivery" onSubmit={handleTakeDelivery}>
        <TotalPriceInfo totalPrice={totalPrice} paymentMethod={data?.clientInfo.paymentMethod} />
      </ActionsButton>
    </OrderLayout>
  )
}

export default CurrentOrderDeliveryMobilePage
