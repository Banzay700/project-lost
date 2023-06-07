import { FC } from 'react'
import { Skeleton, TableCell, Typography } from '@mui/material'

const ColumnSkeleton: FC = () => {
  return (
    <TableCell>
      <Typography component="p">
        <Skeleton />
      </Typography>
    </TableCell>
  )
}

export default ColumnSkeleton
