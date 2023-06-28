import { FC } from 'react'
import { ContentRouteDeliveryMobile, IndicatorsGroup, TableOrderDeliveryLine } from 'components'
import { useScreenTracking } from 'hooks'
import { PageActionsBar, Table } from 'UI'
import { generateStatus } from 'utils'
import { useGetAllDeliveryQuery } from 'store/api'
import { deliveryIndicatorItems, tableHomeTitleDelivery } from './homeDeliveryPage.utils'

const HomeDeliveryPage: FC = () => {
  const { isMobileScreen } = useScreenTracking()
  const { data, isFetching } = useGetAllDeliveryQuery({})
  return (
    <>
      <PageActionsBar>
        <IndicatorsGroup indicatorData={deliveryIndicatorItems} />
      </PageActionsBar>
      {isMobileScreen && <ContentRouteDeliveryMobile data={data} />}
      {!isMobileScreen && (
        <Table tableTitles={tableHomeTitleDelivery} tableMinWidth="660px" isLoading={isFetching}>
          {!isFetching &&
            data?.data.map((item) => (
              <TableOrderDeliveryLine
                key={item.id}
                id={item.id}
                clientName={item.clientInfo.name}
                deliveryAddress={item.address.street}
                phoneNumber={item.clientInfo.phoneNumber}
                status={generateStatus(item.time)}
                onClickAction={() => {}}
              />
            ))}
        </Table>
      )}
    </>
  )
}

export default HomeDeliveryPage
