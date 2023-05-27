import { TableCell, Typography } from '@mui/material'
import { TableNumber, Button, InfoChip } from 'UI'
import { DataTableCellType, TableDataOrders } from 'types'
import { IconAddTipAmount } from 'assets'

export const tableTitleOrder: string[] = [
  'Table Number',
  'Order Number',
  'Total Price',
  'Order Type',
  'Actions',
]

export const dataTableCellOrder = ({
  element,
  className,
}: // onClick,
DataTableCellType<TableDataOrders>) => [
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
        <InfoChip type={element?.orderType} />
      </TableCell>
    ),
  },
  {
    tableCell: (
      <TableCell align="center">
        <Button
          className={className}
          size="small"
          variant="contained"
          startIcon={<IconAddTipAmount />}>
          Close order
        </Button>
      </TableCell>
    ),
  },
]
