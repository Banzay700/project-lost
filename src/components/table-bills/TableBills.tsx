import { FC } from 'react'
import { Table } from 'components/table'
import { dataMokBill } from 'utils'
import { DataTableCellFuncType, TableData, TableDataBills } from 'types'
import { tableTitleBills, dataTableCellBills } from './tableBills.utils'

const TableBills: FC = () => {
  return (
    <Table
      data={dataMokBill as TableDataBills[]}
      tableTitles={tableTitleBills}
      dataTableCell={dataTableCellBills as DataTableCellFuncType<TableData>}
    />
  )
}

export default TableBills
