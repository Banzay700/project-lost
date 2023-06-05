import { FC } from 'react'
import { Reservation } from 'types/ComponetTableType/TableDataItem'
import { TableRow } from '@mui/material'
import { ColumnText } from 'UI'

interface TableReservationLineProps {
  element: Reservation
}

const TableReservationLine: FC<TableReservationLineProps> = ({ element }) => {
  const { table, username, id, time, order } = element
  return (
    <TableRow hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <ColumnText title={username} />
      <ColumnText title={time} />
      <ColumnText title={table} />
      <ColumnText title={order} />
    </TableRow>
  )
}

export default TableReservationLine
