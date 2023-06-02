import { FC } from 'react'
import { TableCell } from '@mui/material'
import s from './TableNumberColumn.module.scss'

interface TableNumberColumnProps {
  table: string | undefined
}

const TableNumberColumn: FC<TableNumberColumnProps> = ({ table }) => {
  return (
    <TableCell sx={{ display: 'flex', justifyContent: 'center' }}>
      <div className={s.tableNumber}>
        <span>{table}</span>
      </div>
    </TableCell>
  )
}

export default TableNumberColumn
