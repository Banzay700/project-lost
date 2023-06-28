import { FC } from 'react'
import {
  Header,
  ActionsButton,
  HeaderActionMobile,
  InfoDelivery,
  OrderDetailList,
  TotalPriceInfo,
  AdaptiveHeaderWrapper,
  OrderLayout,
} from 'components'
import { Button } from 'UI'
import { OrderDetailsItemType } from 'types'
import { Icon } from 'assets'
import { useNavigate, useParams } from 'react-router-dom'
import { useRootLocationPath } from 'hooks/useRootLocationPath.hook'
import { useGetByIDQuery, useUpdateDeliveryMutation } from 'store/api'
import { useUserReducer } from 'hooks/useUserReducer.hook'
import { calculateTotalPrice } from 'utils/calculateTotalPrice'
import { generateTimeString } from 'utils/generateTimeString'

const mok: OrderDetailsItemType[] = [
  {
    id: 'test',
    title: 'test',
    total: 12,
    src: 'test',
    amount: 12,
  },
  {
    id: 'test2',
    title: 'test',
    total: 12,
    src: 'test',
    amount: 12,
  },
  {
    id: 'test3',
    title: 'test',
    total: 12,
    src: 'test',
    amount: 12,
  },
  {
    id: 'test4',
    title: 'test',
    total: 12,
    src: 'test',
    amount: 12,
  },
  {
    id: 'test5',
    title: 'test',
    total: 12,
    src: 'test',
    amount: 12,
  },
  {
    id: 'test6',
    title: 'test',
    total: 12,
    src: 'test',
    amount: 12,
  },
]

const ActiveOrderDeliveryMobilePage: FC = () => {
  const { activeOrder } = useParams()
  const { location } = useRootLocationPath()

  const { data } = useGetByIDQuery(activeOrder || '')
  const [updateDelivery, { isSuccess }] = useUpdateDeliveryMutation()

  const navigate = useNavigate()
  const { userState } = useUserReducer()

  const totalPrice = data && calculateTotalPrice(data.order.dishes)

  const handleUpdateDelivery = () => {
    if (activeOrder) updateDelivery({ id: activeOrder, courier: userState.id })
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
        </InfoDelivery>
      )}
      <OrderDetailList ordersDetail={data?.order} />

      <ActionsButton
        doubleAction
        titleButton={data?.order.status === 'opened' ? 'Cooking in progress' : 'Done'}
        onSubmit={() => {}}
        disabled={data?.order.status === 'opened'}>
        <TotalPriceInfo totalPrice={totalPrice} paymentMethod={data?.clientInfo.paymentMethod} />
      </ActionsButton>
    </OrderLayout>
  )
}

export default ActiveOrderDeliveryMobilePage
