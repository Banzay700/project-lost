import { FC } from 'react'
import { TableCell, Typography } from '@mui/material'

interface TotalPriceColumnProps {
  totalPrice: number
}

const TotalPriceColumn: FC<TotalPriceColumnProps> = ({ totalPrice }) => {
  return (
    <TableCell align="center">
      <Typography color="secondary" variant="h3" fontWeight={400}>
        ${totalPrice}
      </Typography>
    </TableCell>
  )
}

export default TotalPriceColumn
