import { FC } from 'react'
import { TableCell } from '@mui/material'
import { InfoChip } from 'UI'

interface OrderTypeColumnProps {
  orderType: string
}

const OrderTypeColumn: FC<OrderTypeColumnProps> = ({ orderType }) => {
  return (
    <TableCell align="center">
      <InfoChip type={orderType} />
    </TableCell>
  )
}

export default OrderTypeColumn
