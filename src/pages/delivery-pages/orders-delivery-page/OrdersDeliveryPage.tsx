import { FC } from 'react'
import { ContentRouteDeliveryMobile, IndicatorsGroup, TableOrderDeliveryLine } from 'components'
import { PageActionsBar, Table } from 'UI'
import { useScreenTracking, useUserReducer } from 'hooks'
import { useGetAllDeliveryQuery } from 'store/api'
import { generateStatus } from 'utils'
import { deliveryIndicatorItems, tableOrdersTitleDelivery } from './OrdersDeliveryPage.utils'

const OrdersDeliveryPage: FC = () => {
  const { isMobileScreen } = useScreenTracking()
  const { userState } = useUserReducer()
  const { data, isFetching } = useGetAllDeliveryQuery({ courier: userState.id, status: 'opened' })
  return (
    <>
      <PageActionsBar>
        <IndicatorsGroup indicatorData={deliveryIndicatorItems} />
      </PageActionsBar>

      {isMobileScreen && <ContentRouteDeliveryMobile data={data} isLoading={isFetching} />}
      {!isMobileScreen && (
        <Table tableTitles={tableOrdersTitleDelivery} tableMinWidth="660px" isLoading={isFetching}>
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

export default OrdersDeliveryPage
