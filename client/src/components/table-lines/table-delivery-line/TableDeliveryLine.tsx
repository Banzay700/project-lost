import { FC } from 'react'
import { TableRow } from '@mui/material'
import { OrderDishActiveType } from 'types'
import { ColumnText } from 'UI'

interface TableDeliveryLineProps {
  element: OrderDishActiveType
  tax: number
}

const TableDeliveryLine: FC<TableDeliveryLineProps> = ({ element, tax }) => {
  const { title, price, dishTotalPrice, amount } = element
  const taxValue = Math.round((dishTotalPrice / 100) * tax)

  return (
    <TableRow sx={{ height: '52px' }}>
      <ColumnText title={title} />
      <ColumnText title={amount} />
      <ColumnText title={`$${price}`} />
      <ColumnText title={`$${taxValue}`} />
      <ColumnText title={`$${dishTotalPrice}`} />
    </TableRow>
  )
}

export default TableDeliveryLine
