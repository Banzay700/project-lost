import { FC } from 'react'
import s from './TableSkeletonLine.module.scss'
import { TableRow } from '@mui/material'
import { ColumnSkeleton } from 'UI/table-row-columns'

interface TableSkeletonLineProps {
  size: string[]
}

const TableSkeletonLine: FC<TableSkeletonLineProps> = ({ size }) => {
  return (
    <TableRow>
      {size?.map((item) => (
        <ColumnSkeleton key={item} />
      ))}
    </TableRow>
  )
}

export default TableSkeletonLine
