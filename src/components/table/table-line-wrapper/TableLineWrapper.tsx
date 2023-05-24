import { FC } from 'react'
import { TableRow } from '@mui/material'
import { DataTableCellType, TableDataMok } from 'types/index'
import { TableLineItem } from './table-line-item'
import s from './TableLineWrapper.module.scss'

interface TableLineItemProps {
  element: TableDataMok
  dataTableCellFunc: DataTableCellType
}

const TableLineWrapper: FC<TableLineItemProps> = ({ element, dataTableCellFunc }) => {
  const dataCell = dataTableCellFunc(element, s.tableButton)
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableLineItem data={dataCell} />
    </TableRow>
  )
}

export default TableLineWrapper
