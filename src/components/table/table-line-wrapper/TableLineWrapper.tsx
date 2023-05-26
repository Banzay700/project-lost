import { FC } from 'react'
import { TableRow } from '@mui/material'
import { TableData, DataTableCellFuncType } from 'types'
import { TableLineItem } from './table-line-item'
import { total } from './tableLineWrapper.utils'
import s from './TableLineWrapper.module.scss'

interface TableLineItemProps {
  element: TableData
  dataTableCell: DataTableCellFuncType<TableData>
}

const TableLineWrapper: FC<TableLineItemProps> = ({ element, dataTableCell }) => {
  const totalPrice = total(element, 'price') // TODO: refactoring
  const totalAmount = total(element, 'amount')

  const dataCell = dataTableCell({ element, totalPrice, totalAmount, className: s.tableButton })
  return (
    <TableRow hover sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}>
      <TableLineItem key={element.orderNumber} data={dataCell} />
    </TableRow>
  )
}

export default TableLineWrapper
