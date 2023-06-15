import { FC } from 'react'
import { ReservationResponseType } from 'types'
import { TableRow } from '@mui/material'
import { ColumnInfoChip, ColumnText } from 'UI'

interface TableReservationLineProps {
  element: ReservationResponseType
}

const TableReservationLine: FC<TableReservationLineProps> = ({ element }) => {
  const { time, clientName, phoneNumber, table, status } = element

  return (
    <TableRow hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <ColumnText title={clientName} />
      <ColumnText title={time} />
      {table && <ColumnText title={table.number} />}
      <ColumnText title={phoneNumber} />
      <ColumnInfoChip type={status} />
    </TableRow>
  )
}

export default TableReservationLine
