import { TableCell, Typography } from '@mui/material'
import { TableNumber, InfoChip } from 'UI'
import { DataTableCellType, BillsResponseType } from 'types'
import { TableActionsBills } from './table-actions-bills'

export const tableTitleBills: string[] = [
  'Table Number',
  'Order Number',
  'Total Price',
  'Status',
  'Order Type',
  'Actions',
]

export const dataTableCellBills = ({
  element,
  className,
  onClick,
}: DataTableCellType<BillsResponseType>) => [
  {
    tableCell: (
      <TableCell sx={{ display: 'flex', justifyContent: 'center' }}>
        <TableNumber tableNumber={element?.table} />
      </TableCell>
    ),
  },
  {
    tableCell: (
      <TableCell align="center">
        <Typography color="secondary" variant="h3" fontWeight={600}>
          #{element?.orderNumber}
        </Typography>
      </TableCell>
    ),
  },
  {
    tableCell: (
      <TableCell align="center">
        <Typography color="secondary" variant="h3" fontWeight={400}>
          ${element?.totalPrice}
        </Typography>
      </TableCell>
    ),
  },
  {
    tableCell: (
      <TableCell align="center">
        <InfoChip type={element?.status} />
      </TableCell>
    ),
  },
  {
    tableCell: (
      <TableCell align="center">
        <InfoChip type={element?.orderType} />
      </TableCell>
    ),
  },
  {
    tableCell: (
      <TableCell align="center">
        <TableActionsBills status={element?.status} className={className} />
      </TableCell>
    ),
  },
]
