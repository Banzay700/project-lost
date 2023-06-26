import { FC } from 'react'
import {
  ActionsButton,
  InfoDelivery,
  OrderDetailList,
  OrderLayout,
  TotalPriceInfo,
} from 'components'
import { useParams } from 'react-router-dom'
import { OrderDetailsItemType } from 'types'
import { Button } from 'UI'
import { Icon } from 'assets'

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

const CurrentOrderDeliveryMobilePage: FC = () => {
  const { currentOrder } = useParams()
  return (
    <OrderLayout titleHeader="Current order">
      <InfoDelivery deliveryAddress="test" orderNumber="test" clientName="test" readyToTime="test">
        <Button variant="contained" size="small" icon={<Icon.MapMarker />} />
      </InfoDelivery>
      <OrderDetailList ordersDetail={mok} />
      <ActionsButton titleButton="Take Delivery" onSubmit={() => {}}>
        <TotalPriceInfo totalPrice="12" paymentMethod="Cash" />
      </ActionsButton>
    </OrderLayout>
  )
}

export default CurrentOrderDeliveryMobilePage
