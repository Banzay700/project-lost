import { FC } from 'react'
import { Table } from 'components/table'
import { DataTableCellFuncType, TableDataItem, BillsResponseType } from 'types'
import { IndicatorFilterBar } from 'components/indicator-filter-bar'
import { useGetAllBillsQuery } from 'store/api'
import { tableTitleBills, dataTableCellBills } from './tableBills.utils'

const TableBills: FC = () => {
  const handleChangeFilter = (value: string[]) => {
    console.log(value)
  }

  const { data: dataBills } = useGetAllBillsQuery('')
  return (
    <>
      <IndicatorFilterBar
        filterMenuItems={[
          { value: 'delivery', label: 'Delivery' },
          { value: 'dineIn', label: 'Dine in' },
          { value: 'takeAway', label: 'Take away' },
        ]}
        indicatorName={['delivery', 'takeAway', 'dineIn']}
        onChange={handleChangeFilter}
      />
      <Table
        data={dataBills as BillsResponseType[]}
        tableTitles={tableTitleBills}
        dataTableCell={dataTableCellBills as DataTableCellFuncType<TableDataItem>}
      />
    </>
  )
}

export default TableBills
