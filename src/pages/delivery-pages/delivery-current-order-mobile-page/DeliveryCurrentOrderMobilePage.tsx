import { FC } from 'react'
import { Header } from 'components/header'
import {
  ActionsButton,
  DeliveryWrapper,
  HeaderActionMobile,
  InfoDelivery,
  OrderDetailList,
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

const DeliveryCurrentOrderMobilePage: FC = () => {
  const { currentOrder } = useParams()
  return (
    <>
      <Header route="Delivery" withoutLink>
        <HeaderActionMobile label="Current Order" />
      </Header>
      <DeliveryWrapper>
        <InfoDelivery
          deliveryAddress="test"
          orderNumber="test"
          clientName="test"
          readyToTime="test">
          <Button variant="contained" size="small" icon={<Icon.MapMarker />} />
        </InfoDelivery>
        <OrderDetailList ordersDetail={mok} />
        <ActionsButton titleButton="Take Delivery" onSubmit={() => {}}>
          <TotalPriceInfo totalPrice="12" paymentMethod="Cash" />
        </ActionsButton>
      </DeliveryWrapper>
    </>
  )
}

export default DeliveryCurrentOrderMobilePage
