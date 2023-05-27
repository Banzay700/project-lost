import { FC } from 'react'
import { Table } from 'components/table'
import { useGetAllOrdersQuery } from 'store/api/order.api'
import { TableData, TableDataOrders } from 'types/TableType'
import { DataTableCellFuncType } from 'types/DataTableCellType'
import { IndicatorFilterBar } from 'components/indicator-filter-bar'
import { useCreateBillMutation } from 'store/api'
import { tableTitleOrder, dataTableCellOrder } from './tableOrder.utils'

const TableOrders: FC = () => {
  const { data: dataOrders } = useGetAllOrdersQuery('')
  const handleChangeFilter = (value: string[]) => {
    console.log(value)
  }
  const [createBills] = useCreateBillMutation()
  return (
    <>
      <IndicatorFilterBar
        filterMenuItems={[
          { value: 'dineIn', label: 'Dine in' },
          { value: 'takeAway', label: 'Take away' },
        ]}
        indicatorName={['takeAway', 'dineIn']}
        onChange={handleChangeFilter}
      />
      <Table
        data={dataOrders as TableDataOrders[]}
        tableTitles={tableTitleOrder}
        dataTableCell={dataTableCellOrder as DataTableCellFuncType<TableData>}
        // onClick={createBills}
      />
    </>
  )
}

export default TableOrders
