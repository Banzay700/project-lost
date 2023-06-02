import { FC } from 'react'
import { TableCell, Typography } from '@mui/material'

interface OrderNumberColumnProps {
  orderNumber: number
}

const OrderNumberColumn: FC<OrderNumberColumnProps> = ({ orderNumber }) => {
  return (
    <TableCell align="center">
      <Typography color="secondary" variant="h3" fontWeight={600}>
        #{orderNumber}
      </Typography>
    </TableCell>
  )
}

export default OrderNumberColumn
