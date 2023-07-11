import { FC, PropsWithChildren } from 'react'
import { TableCell } from '@mui/material'

interface ColumnWithChildrenProps extends PropsWithChildren {
  columnAlign?: 'center' | 'left' | 'right'
}

const ColumnWithChildren: FC<ColumnWithChildrenProps> = ({ columnAlign, children }) => {
  return <TableCell align={columnAlign || 'center'}>{children}</TableCell>
}

export default ColumnWithChildren
