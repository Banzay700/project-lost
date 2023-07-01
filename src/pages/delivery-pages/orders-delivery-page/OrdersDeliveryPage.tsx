import { FC } from 'react'
import {
  ContentRouteDeliveryMobile,
  IndicatorsGroup,
  SidebarDeliveryInfo,
  TableContent,
} from 'components'
import { PageActionsBar } from 'UI'
import { useScreenTracking, useUserReducer } from 'hooks'
import { useGetAllDeliveryQuery, useLazyGetByIDQuery } from 'store/api'
import { Stack } from '@mui/material'
import { deliveryIndicatorItems, tableOrdersTitleDelivery } from './OrdersDeliveryPage.utils'

const OrdersDeliveryPage: FC = () => {
  const { isMobileScreen } = useScreenTracking()
  const { userState } = useUserReducer()
  const { data, isFetching } = useGetAllDeliveryQuery({ courier: userState.id, status: 'opened' })
  const [getByIdDelivery, { isFetching: isFetchingDeliveryItem, data: deliveryOrderItem }] =
    useLazyGetByIDQuery()

  const handleClickLine = (id: string) => {
    getByIdDelivery(id)
  }
  return (
    <>
      <Stack flex={1} height="100%" width="100%" overflow="auto">
        <PageActionsBar>
          <IndicatorsGroup indicatorData={deliveryIndicatorItems} />
        </PageActionsBar>
        {isMobileScreen && <ContentRouteDeliveryMobile data={data} isLoading={isFetching} />}
        {!isMobileScreen && (
          <TableContent
            tableTitle={tableOrdersTitleDelivery}
            isLoading={isFetching}
            data={data?.data}
            isActiveLine={deliveryOrderItem?.id || data?.data[0]?.id}
            onClickLine={handleClickLine}
            onClickAction={() => {}}
          />
        )}
      </Stack>
      {!isMobileScreen && (
        <SidebarDeliveryInfo
          orderDetail={deliveryOrderItem?.order || data?.data[0]?.order}
          titleButton="Done"
          isLoading={isFetchingDeliveryItem}
        />
      )}
    </>
  )
}

export default OrdersDeliveryPage
