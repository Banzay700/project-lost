import { FC } from 'react'
import s from './ColumnSkeleton.module.scss'
import { Skeleton, TableCell, Typography } from '@mui/material'

interface ColumnSkeletonProps {}

const ColumnSkeleton: FC<ColumnSkeletonProps> = () => {
  return (
    <TableCell>
      <Typography component="p">
        <Skeleton />
      </Typography>
    </TableCell>
  )
}

export default ColumnSkeleton
