import { TableCell, Typography } from '@mui/material'
import { TableNumber, InfoChip } from 'UI'
import { DataTableCellType, TableDataBills } from 'types'
import { TableActionsBills } from './table-actions-bills'

export const tableTitleBills: string[] = [
  'Table Number',
  'Order Number',
  'Total Price',
  'Total Amount',
  'Status',
  'Order Type',
  'Actions',
]

export const dataTableCellBills = ({
  element,
  totalPrice,
  totalAmount,
  className,
}: DataTableCellType<TableDataBills>) => [
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
          ${totalPrice}
        </Typography>
      </TableCell>
    ),
  },
  {
    tableCell: (
      <TableCell align="center">
        <Typography color="secondary" variant="h3" fontWeight={400}>
          {totalAmount}
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
