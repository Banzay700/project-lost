import { FC } from 'react'
import { TableCell } from '@mui/material'
import { InfoChip } from 'UI'

interface ColumnInfoChipProps {
  type?:
    | 'dineIn'
    | 'takeAway'
    | 'delivery'
    | 'opened'
    | 'closed'
    | 'admin'
    | 'waiter'
    | 'courier'
    | 'active'
    | 'inactive'
    | 'cancelled'
    | 'cancel'
    | 'done'
  columnAlign?: 'center' | 'left' | 'right'
}

const ColumnInfoChip: FC<ColumnInfoChipProps> = ({ type, columnAlign }) => {
  return (
    <TableCell align={columnAlign || 'center'}>
      <InfoChip type={type} />
    </TableCell>
  )
}

export default ColumnInfoChip
