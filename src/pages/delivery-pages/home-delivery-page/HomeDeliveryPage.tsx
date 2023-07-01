import { FC } from 'react'
import {
  ContentRouteDeliveryMobile,
  IndicatorsGroup,
  SidebarDeliveryInfo,
  TableContent,
} from 'components'
import { useScreenTracking } from 'hooks'
import { PageActionsBar } from 'UI'
import { useGetAllDeliveryQuery, useLazyGetByIDQuery } from 'store/api'
import { Stack } from '@mui/material'
import { deliveryIndicatorItems, tableHomeTitleDelivery } from './homeDeliveryPage.utils'

const HomeDeliveryPage: FC = () => {
  const { isMobileScreen } = useScreenTracking()
  const { data, isFetching } = useGetAllDeliveryQuery({})
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
            tableTitle={tableHomeTitleDelivery}
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
          titleButton="Take Delivery"
          isLoading={isFetchingDeliveryItem}
        />
      )}
    </>
  )
}

export default HomeDeliveryPage
