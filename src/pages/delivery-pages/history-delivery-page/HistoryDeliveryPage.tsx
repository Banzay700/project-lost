import { FC } from 'react'
import { ContentRouteDeliveryMobile, TableOrderDeliveryLine } from 'components'
import { Pagination, Table } from 'UI'
import { useUserReducer, useScreenTracking, useParamsSearchFilter } from 'hooks'
import { useGetAllDeliveryQuery } from 'store/api'
import { firstLetterUpperCase } from 'utils'
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

  return (
    <>
      {isMobileScreen && (
        <ContentRouteDeliveryMobile
          data={data}
          isLoading={isFetching}
          page={page}
          onChangePagination={handlePagination}
        />
      )}
      {!isMobileScreen && (
        <>
          <Table
            tableTitles={tableHistoryTitleDelivery}
            tableMinWidth="660px"
            isLoading={isFetching}>
            {!isFetching &&
              data?.data.map((item) => (
                <TableOrderDeliveryLine
                  key={item.id}
                  id={item.id}
                  clientName={item.clientInfo.name}
                  deliveryAddress={item.address.street}
                  phoneNumber={item.clientInfo.phoneNumber}
                  status={{ label: firstLetterUpperCase(item.status), type: 'green' }}
                />
              ))}
          </Table>
          {data && (
            <Pagination
              marginRight="30px"
              disabled={data.totalCount > 10}
              page={Number(page)}
              onChange={handlePagination}
              count={Math.ceil(data.totalCount / 10)}
            />
          )}
        </>
      )}
    </>
  )
}

export default HistoryDeliveryPage
