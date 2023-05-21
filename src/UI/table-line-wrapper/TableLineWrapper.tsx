import { FC } from 'react'
import { TableRow } from '@mui/material'
import { TableDataMok } from 'types'
import { dataTableCell } from './dataTableCell.utils'
import { TableLineItem } from './table-line-item'
import s from './TableLineWrapper.module.scss'

interface TableLineItemProps {
  element: TableDataMok
}

const TableLineWrapper: FC<TableLineItemProps> = ({ element }) => {
  const dataCell = dataTableCell(element, s.tableButton)
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableLineItem data={dataCell} />
    </TableRow>
  )
}

export default TableLineWrapper
