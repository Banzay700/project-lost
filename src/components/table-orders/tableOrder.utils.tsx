import { TableCell, Typography } from '@mui/material'
import { TableNumber, Button, InfoChip } from 'UI'
import { DataTableCellType, BillsResponseType, OrderResponseType } from 'types'
import { IconAddTipAmount } from 'assets'
import { MouseEvent } from 'react'

export const tableTitleOrder: string[] = [
  'Table Number',
  'Order Number',
  'Total Price',
  'Order Type',
  'Actions',
]

const prepareBillsData = (element: OrderResponseType) => {
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
}: DataTableCellType<OrderResponseType>) => {
  const handleSendOrder = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    const dataOrder = prepareBillsData(element)

    if (onClick) {
      await onClick(dataOrder as BillsResponseType)
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
          <InfoChip
            type={
              element?.orderType as
                | 'takeAway'
                | 'dineIn'
                | 'delivery'
                | 'closed'
                | 'opened'
                | undefined
            }
          />
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
