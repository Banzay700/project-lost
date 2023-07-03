import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { IndicatorFilterBar, TableOrdersLine } from 'components'
import { useCreateBillMutation, useGetAllOrdersQuery, useLazyGetOrderQuery } from 'store/api'
import { useActiveTableLine, useOrderReducer, useParamsSearchFilter } from 'hooks'

import { ROUTES_WAITER } from 'routes'
import { Pagination, Table } from 'UI'
import { OrderType } from 'types'
import {
  prepareBillsData,
  tableFilterMenuItems,
  tableIndicatorItems,
  tableTitleOrder,
  TABLE_ROWS_PER_PAGE,
} from './tableOrder.utils'

const TableOrders: FC = () => {
  const { clearNewOrderState } = useOrderReducer()
  const {
    params: orderType,
    page,
    handleFilterCategory,
    handlePagination,
  } = useParamsSearchFilter('orderType')
  const { data, isFetching } = useGetAllOrdersQuery({ orderType, page, limit: TABLE_ROWS_PER_PAGE })
  const { active, setActive } = useActiveTableLine(data?.data as OrderType[])

  const navigate = useNavigate()
  const [trigger] = useLazyGetOrderQuery()
  const [createBills] = useCreateBillMutation()

  const handleLineWrapperClick = (id: string) => trigger(id)

  const handleSendOrder = (id: string) => {
    const dataOrder = prepareBillsData(id, data?.data)
    if (dataOrder) {
      createBills(dataOrder)
      navigate(`/${ROUTES_WAITER.BILLS}`)
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
        tableTitles={tableTitleOrder}
        tableMinWidth="660px"
        notDataFound={!data?.data.length}>
        {data?.data.map((el) => (
          <TableOrdersLine
            element={el}
            key={el?.id}
            active={active}
            setActive={setActive}
            onClickLine={handleLineWrapperClick}
            onClickAction={handleSendOrder}
          />
        ))}
      </Table>
      {data && (
        <Pagination
          disabled={data.totalCount > TABLE_ROWS_PER_PAGE}
          marginRight="30px"
          count={Math.ceil(data.totalCount / TABLE_ROWS_PER_PAGE)}
          onChange={handlePagination}
          page={Number(page)}
        />
      )}
    </>
  )
}

export default TableOrders
