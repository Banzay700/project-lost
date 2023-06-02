import { FC } from 'react'
import { TableCell } from '@mui/material'
import { TableNumber } from 'UI'

interface TableNumberColumnProps {
  table: string | undefined
}

const TableNumberColumn: FC<TableNumberColumnProps> = ({ table }) => {
  return (
    <TableCell sx={{ display: 'flex', justifyContent: 'center' }}>
      <TableNumber tableNumber={table} />
    </TableCell>
  )
}

export default TableNumberColumn
