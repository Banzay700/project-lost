import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pagination, Stack } from '@mui/material'
import { IndicatorFilterBar, Table } from 'components'
import { useCreateBillMutation, useGetAllOrdersQuery, useLazyGetOrderQuery } from 'store/api'
import { useOrderReducer, useParamsSearchFilter } from 'hooks'

import { ROUTES } from 'routes'
import {
  prepareBillsData,
  tableFilterMenuItems,
  tableIndicatorItems,
  tableTitleOrder,
} from './tableOrder.utils'

const TableOrders: FC = () => {
  const { clearNewOrderState } = useOrderReducer()
  const {
    params: orderType,
    page,
    handleFilterCategory,
    handlePagination,
  } = useParamsSearchFilter('orderType')
  const { data, isFetching } = useGetAllOrdersQuery({ orderType, page, limit: 10 })

  const navigate = useNavigate()
  const [trigger] = useLazyGetOrderQuery()
  const [createBills] = useCreateBillMutation()

  const handleLineWrapperClick = (id: string) => trigger(id)

  const handleSendOrder = (id: string) => {
    const dataOrder = prepareBillsData(id, data?.data)
    if (dataOrder) {
      createBills(dataOrder)
      navigate(`/${ROUTES.BILLS}`)
      clearNewOrderState()
    }
  }
  return (
    <>
      <IndicatorFilterBar
        isFilterMenu
        indicatorData={tableIndicatorItems}
        filterMenuItems={tableFilterMenuItems}
        defaultValue={orderType?.split(',')}
        onChange={handleFilterCategory}
      />
      <Table
        isLoading={isFetching}
        data={data?.data}
        tableTitles={tableTitleOrder}
        tableType="orders"
        tableMinWidth="660px"
        onClickAction={handleSendOrder}
        onClickLine={handleLineWrapperClick}
      />
      <Stack
        sx={{
          height: 'fit-content',
          alignItems: 'flex-end',
          marginRight: '30px',
          p: { md: '20px', xs: '10px' },
          flex: 0,
        }}>
        {data && (
          <Pagination
            count={Math.ceil(data.totalCount / 10)}
            variant="text"
            shape="rounded"
            color="primary"
            onChange={handlePagination}
            page={Number(page)}
          />
        )}
      </Stack>
    </>
  )
}

export default TableOrders
