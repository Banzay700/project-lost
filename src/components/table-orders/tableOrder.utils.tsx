import { TableCell, Typography } from '@mui/material'
import { TableNumber, Button, InfoChip } from 'UI'
import { DataTableCellType, TableDataBills, TableDataOrders } from 'types'
import { IconAddTipAmount } from 'assets'

export const tableTitleOrder: string[] = [
  'Table Number',
  'Order Number',
  'Total Price',
  'Order Type',
  'Actions',
]

const prepareBillsData = (element: TableDataOrders) => {
  const { id, orderType, orderNumber, dishes, table, totalPrice, description } = element
  const modifiedData = dishes?.map(({ dishID, dishTotalPrice, amount }) => {
    return {
      dishID,
      amount,
      price: dishTotalPrice,
    }
  })
  return {
    orderID: id,
    orderType,
    orderNumber,
    table,
    description,
    totalPrice,
    dishes: modifiedData,
  }
}

export const dataTableCellOrder = ({
  element,
  className,
  onClick,
}: DataTableCellType<TableDataOrders>) => {
  const handleSendOrder = async (e) => {
    e.stopPropagation()
    const dataOrder = prepareBillsData(element)

    console.log('Click on button', e.currentTarget)
    if (onClick) {
      await onClick(dataOrder as TableDataBills)
    }
  }

  return [
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
            startIcon={<IconAddTipAmount />}
            onClick={handleSendOrder}>
            Close order
          </Button>
        </TableCell>
      ),
    },
  ]
}
