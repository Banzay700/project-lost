import { FC } from 'react'
import { ContentRouteDeliveryMobile, IndicatorsGroup } from 'components'
import { RadioButtonCardContentItemType } from 'types'
import { deliveryIndicatorItems } from './OrdersDeliveryPage.utils'
import { PageActionsBar } from 'UI/page-actions-bar'
import { useScreenTracking } from 'hooks/useScreenTracking'

const mok: RadioButtonCardContentItemType[] = [
  {
    value: 'test',
    clientName: 'Artem',
    deliveryAddress: 'tes2t2, test3',
    orderNumber: 123123,
    status: { type: 'red', label: 'Priority' },
    timeToReady: '14min',
  },
  {
    value: 'test2',
    clientName: 'Artem2',
    deliveryAddress: 'test2, test3',
    orderNumber: 123123,
    status: { type: 'green', label: 'Flexible' },
    timeToReady: '14min',
  },
  {
    value: 'test3',
    clientName: 'Artem3',
    deliveryAddress: 'test2, test3',
    orderNumber: 123123,
    status: { type: 'primary', label: 'Timely' },
    timeToReady: '14min',
  },
  {
    value: 'test4',
    clientName: 'Artem3',
    deliveryAddress: 'test2, test3',
    orderNumber: 123123,
    status: { type: 'primary', label: 'Timely' },
    timeToReady: '14min',
  },
  {
    value: 'test5',
    clientName: 'Artem3',
    deliveryAddress: 'test2, test3',
    orderNumber: 123123,
    status: { type: 'primary', label: 'Timely' },
    timeToReady: '14min',
  },
  {
    value: 'test6',
    clientName: 'Artem3',
    deliveryAddress: 'test2, test3',
    orderNumber: 123123,
    status: { type: 'primary', label: 'Timely' },
    timeToReady: '14min',
  },
  {
    value: 'test7',
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
