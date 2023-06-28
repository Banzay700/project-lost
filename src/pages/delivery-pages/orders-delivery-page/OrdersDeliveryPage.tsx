import { FC } from 'react'
import { ContentRouteDeliveryMobile, IndicatorsGroup } from 'components'
import { PageActionsBar } from 'UI'
import { useScreenTracking, useUserReducer } from 'hooks'
import { useGetAllDeliveryQuery } from 'store/api'
import { deliveryIndicatorItems } from './OrdersDeliveryPage.utils'

const OrdersDeliveryPage: FC = () => {
  const { isMobileScreen } = useScreenTracking()
  const { userState } = useUserReducer()
  const { data } = useGetAllDeliveryQuery({ courier: userState.id, status: 'opened' })
  return (
    <>
      <PageActionsBar>
        <IndicatorsGroup indicatorData={deliveryIndicatorItems} />
      </PageActionsBar>

      {isMobileScreen && <ContentRouteDeliveryMobile cardItem={data?.data} />}
      {!isMobileScreen && <div>test</div>}
    </>
  )
}

export default OrdersDeliveryPage
