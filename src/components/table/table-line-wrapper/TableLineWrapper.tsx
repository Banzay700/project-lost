import { FC } from 'react'
import { TableRow } from '@mui/material'
import { TableData, DataTableCellFuncType } from 'types'
import { TableLineItem } from './table-line-item'
import s from './TableLineWrapper.module.scss'

interface TableLineItemProps {
  element: TableData
  dataTableCell: DataTableCellFuncType<TableData>
  onClick?: (dataOrder: TableData) => void
}

const TableLineWrapper: FC<TableLineItemProps> = ({ element, dataTableCell, onClick }) => {
  const dataCell = dataTableCell({
    element,
    onClick,
    className: s.tableButton,
  })
  return (
    <TableRow hover sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}>
      <TableLineItem key={element.id} data={dataCell} />
    </TableRow>
  )
}

export default TableLineWrapper
