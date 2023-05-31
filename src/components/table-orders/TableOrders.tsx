import { FC } from 'react'
import { Table } from 'components/table'
import { IndicatorFilterBar } from 'components/indicator-filter-bar'
import { useCreateBillMutation, useGetAllOrdersQuery } from 'store/api'
import { OrderResponseType, DataTableCellFuncType, TableDataItem } from 'types'
import { useSearchParamsType } from 'hooks/useSearchParamsType.hook'
import { tableTitleOrder, dataTableCellOrder } from './tableOrder.utils'

const TableOrders: FC = () => {
  const { type, handleChangeFilter } = useSearchParamsType()
  const { data: dataOrders } = useGetAllOrdersQuery({ type })

  const [createBills] = useCreateBillMutation()

  return (
    <>
      <IndicatorFilterBar
        filterMenuItems={[
          { value: 'dineIn', label: 'Dine in' },
          { value: 'takeAway', label: 'Take away' },
        ]}
        indicatorName={['dineIn', 'takeAway']}
        defaultValue={type?.split(',')}
        onChange={handleChangeFilter}
      />
      <Table
        data={dataOrders as OrderResponseType[]}
        tableTitles={tableTitleOrder}
        dataTableCell={dataTableCellOrder as DataTableCellFuncType<TableDataItem>}
        onClick={createBills as (dataOrder: TableDataItem) => void}
      />
    </>
  )
}

export default TableOrders
