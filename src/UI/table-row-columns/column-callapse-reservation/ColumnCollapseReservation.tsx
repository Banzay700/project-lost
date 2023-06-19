import { FC } from 'react'
import { TableCell, TableRow } from '@mui/material'

interface ColumnCollapseReservationProps {
  label: string
  data: string | undefined
}

const ColumnCollapseReservation: FC<ColumnCollapseReservationProps> = ({ label, data }) => {
  return (
    <TableRow>
      <TableCell sx={{ border: 0 }}>{label}</TableCell>
      <TableCell sx={{ border: 0 }}>-</TableCell>
      <TableCell sx={{ border: 0 }}>{data || 'None'}</TableCell>
    </TableRow>
  )
}

export default ColumnCollapseReservation
