import { FC } from 'react'
import { TableCell } from '@mui/material'
import { InfoTag } from 'UI'

interface ColumnInfoTagProps {
  type?: 'blue' | 'primary' | 'yellow' | 'green' | 'red' | 'default'
  label: string
  columnAlign?: 'center' | 'left' | 'right'
}

const ColumnInfoTag: FC<ColumnInfoTagProps> = ({ type, label, columnAlign }) => {
  return (
    <TableCell align={columnAlign || 'center'}>
      <InfoTag type={type} label={label} />
    </TableCell>
  )
}

export default ColumnInfoTag
