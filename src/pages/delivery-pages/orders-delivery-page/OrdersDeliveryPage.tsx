import { FC } from 'react'
import { ContentRouteDeliveryMobile, IndicatorsGroup } from 'components'
import { RadioButtonCardContentItemType } from 'types'
import { PageActionsBar } from 'UI/page-actions-bar'
import { useScreenTracking } from 'hooks/useScreenTracking'
import { deliveryIndicatorItems } from './OrdersDeliveryPage.utils'

const mok: RadioButtonCardContentItemType[] = [
  {
    id: 'test',
    clientName: 'Artem',
    deliveryAddress: 'tes2t2, test3',
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

const OrdersDeliveryPage: FC = () => {
  const { isMobileScreen } = useScreenTracking()

  return (
    <>
      <PageActionsBar>
        <IndicatorsGroup indicatorData={deliveryIndicatorItems} />
      </PageActionsBar>
      {isMobileScreen && <ContentRouteDeliveryMobile cardItem={mok} />}
      {!isMobileScreen && <div>test</div>}
    </>
  )
}

export default OrdersDeliveryPage
