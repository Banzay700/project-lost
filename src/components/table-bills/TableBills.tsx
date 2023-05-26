import { FC } from 'react'
import { Table } from 'components/table'
import { dataMokBill } from 'utils'
import { DataTableCellFuncType, TableData, TableDataBills } from 'types'
import { IndicatorFilterBar } from 'components/indicator-filter-bar'
import { tableTitleBills, dataTableCellBills } from './tableBills.utils'

const TableBills: FC = () => {
  const handleChangeFilter = (value: string[]) => {
    console.log(value)
  }

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
        data={dataMokBill as TableDataBills[]}
        tableTitles={tableTitleBills}
        dataTableCell={dataTableCellBills as DataTableCellFuncType<TableData>}
      />
    </>
  )
}

export default TableBills
