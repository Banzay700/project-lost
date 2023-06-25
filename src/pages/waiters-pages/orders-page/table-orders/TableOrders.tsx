import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { IndicatorFilterBar, Table } from 'components'
import { useCreateBillMutation, useGetAllOrdersQuery, useLazyGetOrderQuery } from 'store/api'
import { useOrderReducer, useParamsSearchFilter } from 'hooks'

import { ROUTES } from 'routes'
import { Pagination } from 'UI'
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
      {data && data.totalCount > 10 && (
        <Pagination
          marginRight="30px"
          count={Math.ceil(data.totalCount / 10)}
          onChange={handlePagination}
          page={Number(page)}
        />
      )}
    </>
  )
}

export default TableOrders
