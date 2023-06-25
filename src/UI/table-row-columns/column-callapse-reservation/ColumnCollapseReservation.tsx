import { FC } from 'react'
import { TableCell, TableRow } from '@mui/material'

interface ColumnCollapseReservationProps {
  label: string
  data: string | undefined
}

const ColumnCollapseReservation: FC<ColumnCollapseReservationProps> = ({ label, data }) => {
  return (
    <TableRow sx={{ '& td:last-child': { padding: '16px' }, height: '52px' }}>
      <TableCell align="center">{label}</TableCell>
      <TableCell align="center">-</TableCell>
      <TableCell align="center" sx={{ overflowWrap: 'break-word', maxWidth: '118px' }}>
        {data || 'None'}
      </TableCell>
    </TableRow>
  )
}

export default ColumnCollapseReservation
