import { FC } from 'react'
import {
  Header,
  ActionsButton,
  HeaderActionMobile,
  InfoDelivery,
  OrderDetailList,
  TotalPriceInfo,
  AdaptiveHeaderWrapper,
} from 'components'
import { Button } from 'UI'
import { OrderDetailsItemType } from 'types'
import { Icon } from 'assets'
import { useParams } from 'react-router-dom'

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

  return (
    <>
      <Header routeLogoStyle="Delivery" withoutLink>
        <HeaderActionMobile label="Active Order" />
      </Header>
      <AdaptiveHeaderWrapper>
        <InfoDelivery
          deliveryAddress="test"
          orderNumber="test"
          clientName="test"
          readyToTime="test">
          <Button variant="contained" size="small" icon={<Icon.Phone />} />
          <Button variant="contained" size="small" icon={<Icon.Message />} />
          <Button variant="contained" size="small" icon={<Icon.MapMarker />} />
        </InfoDelivery>
        <OrderDetailList ordersDetail={mok} />
        <ActionsButton doubleAction titleButton="Done" onSubmit={() => {}}>
          <TotalPriceInfo totalPrice="12" paymentMethod="Cash" />
        </ActionsButton>
      </AdaptiveHeaderWrapper>
    </>
  )
}

export default ActiveOrderDeliveryMobilePage
