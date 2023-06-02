import { FC } from 'react'
import { TableCell } from '@mui/material'
import { InfoChip } from 'UI'

interface StatusColumnProps {
  status: 'opened' | 'closed' | undefined
}

const StatusColumn: FC<StatusColumnProps> = ({ status }) => {
  return (
    <TableCell align="center">
      <InfoChip type={status} />
    </TableCell>
  )
}

export default StatusColumn
