import { FC } from 'react'
import { PageActionsBar } from 'UI/page-actions-bar'
import { IndicatorsGroup } from 'components/indicators-group'
import {
  deliveryIndicatorItems,
  tableTitleDelivery,
} from 'pages/delivery-pages/home-delivery-page/homeDeliveryPage.utils'
import { ContentRouteDeliveryMobile } from 'components/delivery-components'
import { Table } from 'UI/table'
import { TableOrderDeliveryLine } from 'components/table-lines'
import { generateStatus } from 'utils/generateStatus'
import { useUserReducer } from 'hooks/useUserReducer.hook'
import { useGetAllDeliveryQuery } from 'store/api'
import { useScreenTracking } from 'hooks/useScreenTracking'

const HistoryDeliveryPage: FC = () => {
  const { isMobileScreen } = useScreenTracking()
  const { userState } = useUserReducer()
  const { data } = useGetAllDeliveryQuery({ courier: userState.id, status: 'closed' })
  return (
    <>
      <PageActionsBar>
        <IndicatorsGroup indicatorData={deliveryIndicatorItems} />
      </PageActionsBar>
      {isMobileScreen && <ContentRouteDeliveryMobile cardItem={data?.data} />}
      {/*{!isMobileScreen && <Table tableTitles={tableTitleDelivery} tableMinWidth="660px"></Table>}*/}
    </>
  )
}

export default HistoryDeliveryPage
