import { FC } from 'react'
import { Table } from 'components/table'
import { useGetAllOrdersQuery } from 'store/api/order.api'
import { TableData, TableDataOrders } from 'types/TableType'
import { DataTableCellFuncType } from 'types/DataTableCellType'
import { tableTitleOrder, dataTableCellOrder } from './tableOrder.utils'

const TableOrders: FC = () => {
  const { data: dataOrders } = useGetAllOrdersQuery('')

  return (
    <Table
      data={dataOrders as TableDataOrders[]}
      tableTitles={tableTitleOrder}
      dataTableCell={dataTableCellOrder as DataTableCellFuncType<TableData>}
    />
  )
}

export default TableOrders
