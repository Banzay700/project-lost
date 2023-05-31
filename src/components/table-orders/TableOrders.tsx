import { FC } from 'react'
import { Table, IndicatorFilterBar } from 'components'
import { OrderResponseType, DataTableCellFuncType, TableDataItem } from 'types'
import { useCreateBillMutation, useGetAllOrdersQuery } from 'store/api'
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
        data={dataOrders as OrderResponseType[]}
        tableTitles={tableTitleOrder}
        dataTableCell={dataTableCellOrder as DataTableCellFuncType<TableDataItem>}
        onClick={createBills as (dataOrder: TableDataItem) => void}
      />
    </>
  )
}

export default TableOrders
