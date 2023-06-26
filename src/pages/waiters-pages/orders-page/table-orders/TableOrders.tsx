import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { IndicatorFilterBar, TableOrdersLine } from 'components'
import { useCreateBillMutation, useGetAllOrdersQuery, useLazyGetOrderQuery } from 'store/api'
import { useActiveTableLine, useOrderReducer, useParamsSearchFilter } from 'hooks'

import { ROUTES } from 'routes'
import { Pagination, Table } from 'UI'
import { OrderType } from 'types'
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
  const { active, setActive } = useActiveTableLine(data?.data as OrderType[])

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
      <Table isLoading={isFetching} tableTitles={tableTitleOrder} tableMinWidth="660px">
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
