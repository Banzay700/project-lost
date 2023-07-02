import { FC } from 'react'
import { ContentRouteDeliveryMobile, SidebarDeliveryInfo, TableContent } from 'components'
import { Pagination } from 'UI'
import { useUserReducer, useScreenTracking, useParamsSearchFilter } from 'hooks'
import { useGetAllDeliveryQuery, useLazyGetByIDQuery } from 'store/api'
import { Stack } from '@mui/material'
import { tableHistoryTitleDelivery } from './historyDeliveryPage.utils'

const HistoryDeliveryPage: FC = () => {
  const { isMobileScreen } = useScreenTracking()
  const { page, handlePagination } = useParamsSearchFilter('')
  const { userState } = useUserReducer()
  const { data, isFetching } = useGetAllDeliveryQuery({
    courier: userState.id,
    status: 'closed',
    page,
    limit: 10,
  })
  const [getByIdDelivery, { isFetching: isFetchingDeliveryItem, data: deliveryOrderItem }] =
    useLazyGetByIDQuery()

  const handleClickLine = (id: string) => {
    getByIdDelivery(id)
  }

  return (
    <>
      <Stack flex={1} height="100%" width="100%" overflow="auto">
        {isMobileScreen && (
          <ContentRouteDeliveryMobile
            data={data}
            isLoading={isFetching}
            page={page}
            onChangePagination={handlePagination}
          />
        )}
        {!isMobileScreen && (
          <TableContent
            tableTitle={tableHistoryTitleDelivery}
            isLoading={isFetching}
            data={data?.data}
            isActiveLine={deliveryOrderItem?.id || data?.data[0]?.id}
            onClickLine={handleClickLine}
          />
        )}
        {data && (
          <Pagination
            marginRight="30px"
            disabled={data.totalCount > 10}
            page={Number(page)}
            onChange={handlePagination}
            count={Math.ceil(data.totalCount / 10)}
          />
        )}
      </Stack>
      {!isMobileScreen && (
        <SidebarDeliveryInfo
          orderDetail={data?.data[0]?.order}
          isLoading={isFetchingDeliveryItem}
        />
      )}
    </>
  )
}

export default HistoryDeliveryPage
