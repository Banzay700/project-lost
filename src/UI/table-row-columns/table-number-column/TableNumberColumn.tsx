import { FC } from 'react'
import { TableCell, Typography } from '@mui/material'
import { TableNumberColumnContent } from './TableNumberColumn.styled'

interface TableNumberColumnProps {
  table: string | undefined
}

const TableNumberColumn: FC<TableNumberColumnProps> = ({ table }) => {
  return (
    <TableCell sx={{ display: 'flex', justifyContent: 'center' }}>
      <TableNumberColumnContent>
        <Typography component="span" variant="h3" fontWeight={600} color="primary">
          {table}
        </Typography>
      </TableNumberColumnContent>
    </TableCell>
  )
}

export default TableNumberColumn
