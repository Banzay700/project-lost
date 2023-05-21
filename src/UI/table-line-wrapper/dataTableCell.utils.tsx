import { TableCell, Typography } from '@mui/material'
import { TableNumber, InfoChip } from 'UI'
import { IconAddTipAmount } from 'assets'
import { TableDataMok } from 'types'
import { TableActions } from './table-actions'

export const dataTableCell = (
  { number, orderNumber, status, orderType, amount }: TableDataMok,
  className: string,
) => [
  {
    tableCell: (
      <TableCell sx={{ display: 'flex', justifyContent: 'center' }}>
        <TableNumber tableNumber={number} />
      </TableCell>
    ),
  },
  {
    tableCell: (
      <TableCell align="center">
        <Typography color="secondary" variant="h3" fontWeight={600}>
          #{orderNumber}
        </Typography>
      </TableCell>
    ),
  },
  {
    tableCell: (
      <TableCell align="center">
        <Typography color="secondary" variant="h3" fontWeight={400}>
          ${amount}
        </Typography>
      </TableCell>
    ),
  },
  status && {
    tableCell: (
      <TableCell align="center">
        <InfoChip type={status} />
      </TableCell>
    ),
  },
  {
    tableCell: (
      <TableCell align="center">
        <InfoChip type={orderType} />
      </TableCell>
    ),
  },
  {
    tableCell: (
      <TableCell align="center">
        <TableActions status={status} className={className} startIcon={<IconAddTipAmount />} />
      </TableCell>
    ),
  },
]
