import { FC, useEffect } from 'react'
import {
  ActionsButton,
  InfoDelivery,
  OrderDetailList,
  TotalPriceInfo,
  OrderLayout,
  NotifyError,
} from 'components'
import { Button, InfoDeliverySkeleton } from 'UI'
import { Icon } from 'assets'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetByIDQuery, useUpdateDeliveryMutation, useLazySendNotifyQuery } from 'store/api'
import { useUserReducer, useRootLocationPath, useScreenTracking } from 'hooks'
import { calculateTotalPrice, generateTimeString } from 'utils'
import { ROUTES_DELIVERY } from 'routes/routes.utils'

const ActiveOrderDeliveryMobilePage: FC = () => {
  const { activeOrder } = useParams()
  const { isMobileScreen } = useScreenTracking()
  const { location } = useRootLocationPath()
  const { data, isFetching } = useGetByIDQuery(activeOrder || '')
  const [sendNotify, { isSuccess: isSuccessNotify, isError, error }] = useLazySendNotifyQuery()
  const [updateDelivery, { isSuccess }] = useUpdateDeliveryMutation()

  const { userState } = useUserReducer()
  const navigate = useNavigate()

  const totalPrice = data && calculateTotalPrice(data.order.dishes)

  const handleCloseDelivery = () => {
    if (activeOrder && data)
      updateDelivery({ id: activeOrder, courier: userState.id, status: 'closed', bill: data.bill })
  }

  const handleCancelDelivery = () => {
    if (activeOrder && data) updateDelivery({ id: activeOrder })
  }

  const handleSendNotify = () => {
    sendNotify(activeOrder || '')
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
    <OrderLayout titleHeader="Active order">
      {!!isSuccessNotify && <NotifyError isSuccess />}
      {!!isError && <NotifyError isError error={error} />}
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
          <Button
            variant="contained"
            linkTo={`tel:${data.clientInfo.phoneNumber}`}
            size="small"
            icon={<Icon.Phone />}
          />
          <Button
            variant="contained"
            size="small"
            icon={<Icon.NotifyUser />}
            onClick={handleSendNotify}
          />
        </InfoDelivery>
      )}
      {isFetching && <InfoDeliverySkeleton />}
      <OrderDetailList ordersDetail={data?.order} isLoading={isFetching} />
      <ActionsButton
        doubleAction
        titleButton={data?.order.status === 'opened' ? 'Cooking in progress' : 'Done'}
        onSubmit={handleCloseDelivery}
        onCancel={handleCancelDelivery}
        disabled={data?.order.status === 'opened'}>
        <TotalPriceInfo totalPrice={totalPrice} paymentMethod={data?.clientInfo.paymentMethod} />
      </ActionsButton>
    </OrderLayout>
  )
}

export default ActiveOrderDeliveryMobilePage
