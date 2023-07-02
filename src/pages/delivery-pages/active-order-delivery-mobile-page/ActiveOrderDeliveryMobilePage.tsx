import { FC } from 'react'
import {
  ActionsButton,
  InfoDelivery,
  OrderDetailList,
  TotalPriceInfo,
  OrderLayout,
} from 'components'
import { Button } from 'UI'
import { Icon } from 'assets'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetByIDQuery, useUpdateDeliveryMutation } from 'store/api'
import { useUserReducer, useRootLocationPath } from 'hooks'
import { calculateTotalPrice, generateTimeString } from 'utils'

const ActiveOrderDeliveryMobilePage: FC = () => {
  const { activeOrder } = useParams()
  const { location } = useRootLocationPath()
  const { data } = useGetByIDQuery(activeOrder || '')
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

  if (isSuccess) navigate(`/${location}`)

  return (
    <OrderLayout titleHeader="Active order">
      {data && (
        <InfoDelivery
          deliveryAddress={data.address.street}
          orderNumber={data.order.orderNumber}
          clientName={data.clientInfo.name}
          readyToTime={generateTimeString(data.time)}>
          <Button variant="contained" size="small" icon={<Icon.MapMarker />} />
          <Button variant="contained" size="small" icon={<Icon.Phone />} />
          <Button variant="contained" size="small" icon={<Icon.NotifyUser />} />
        </InfoDelivery>
      )}
      <OrderDetailList ordersDetail={data?.order} />
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
