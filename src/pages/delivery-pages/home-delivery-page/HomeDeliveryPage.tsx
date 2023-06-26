import { FC } from 'react'
import { ContentRouteDeliveryMobile, IndicatorsGroup, TableOrderDeliveryLine } from 'components'
import { OrderDetailsItemType, RadioButtonCardContentItemType } from 'types'
import { useScreenTracking } from 'hooks'
import { PageActionsBar, Table } from 'UI'
import { deliveryIndicatorItems, tableTitleDelivery } from './homeDeliveryPage.utils'

const mok: RadioButtonCardContentItemType[] = [
  {
    id: 'test',
    clientName: 'Artem',
    deliveryAddress: 'test2, test3',
    orderNumber: 123123,
    status: { type: 'red', label: 'Priority' },
    timeToReady: '14min',
  },
  {
    id: 'test2',
    clientName: 'Artem2',
    deliveryAddress: 'test2, test3',
    orderNumber: 123123,
    status: { type: 'green', label: 'Flexible' },
    timeToReady: '14min',
  },
  {
    id: 'test3',
    clientName: 'Artem3',
    deliveryAddress: 'test2, test3',
    orderNumber: 123123,
    status: { type: 'primary', label: 'Timely' },
    timeToReady: '14min',
  },
  {
    id: 'test4',
    clientName: 'Artem3',
    deliveryAddress: 'test2, test3',
    orderNumber: 123123,
    status: { type: 'primary', label: 'Timely' },
    timeToReady: '14min',
  },
  {
    id: 'test5',
    clientName: 'Artem3',
    deliveryAddress: 'test2, test3',
    orderNumber: 123123,
    status: { type: 'primary', label: 'Timely' },
    timeToReady: '14min',
  },
  {
    id: 'test6',
    clientName: 'Artem3',
    deliveryAddress: 'test2, test3',
    orderNumber: 123123,
    status: { type: 'primary', label: 'Timely' },
    timeToReady: '14min',
  },
  {
    id: 'test7',
    clientName: 'Artem3',
    deliveryAddress: 'test2, test3',
    orderNumber: 123123,
    status: { type: 'primary', label: 'Timely' },
    timeToReady: '14min',
  },
]

const mok2: OrderDetailsItemType[] = [
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

const HomeDeliveryPage: FC = () => {
  const { isMobileScreen } = useScreenTracking()
  return (
    <>
      <PageActionsBar>
        <IndicatorsGroup indicatorData={deliveryIndicatorItems} />
      </PageActionsBar>
      {isMobileScreen && <ContentRouteDeliveryMobile cardItem={mok} />}
      {!isMobileScreen && (
        <Table tableTitles={tableTitleDelivery} tableMinWidth="660px">
          <TableOrderDeliveryLine
            clientName="test"
            deliveryAddress="test3"
            id="test1"
            phoneNumber="asdasdasd"
            status={{ type: 'red', label: 'test' }}
            onClickAction={() => {}}
          />
        </Table>
      )}
    </>
  )
}

export default HomeDeliveryPage
