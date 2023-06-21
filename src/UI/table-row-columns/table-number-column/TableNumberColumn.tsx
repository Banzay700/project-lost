import { FC } from 'react'
import { Stack, TableCell, Typography } from '@mui/material'
import { TableNumberColumnContent } from './TableNumberColumn.styled'

interface TableNumberColumnProps {
  table: string | undefined
}

const TableNumberColumn: FC<TableNumberColumnProps> = ({ table }) => {
  return (
    <TableCell align="center">
      <Stack alignItems="center">
        <TableNumberColumnContent>
          <Typography component="span" variant="h3" fontWeight={600} color="primary">
            {table}
          </Typography>
        </TableNumberColumnContent>
      </Stack>
    </TableCell>
  )
}

export default TableNumberColumn
