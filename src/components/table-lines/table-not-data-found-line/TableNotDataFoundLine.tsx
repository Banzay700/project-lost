import { FC } from 'react'
import { TableCell, TableRow } from '@mui/material'
import { Icon } from 'assets'

interface TableNotDataFoundLineProps {
  length: number
}

const TableNotDataFoundLine: FC<TableNotDataFoundLineProps> = ({ length }) => {
  return (
    <TableRow>
      <TableCell colSpan={length} sx={{ p: '15px', width: '100%', height: '500px' }} align="center">
        <Icon.NotDataFound />
      </TableCell>
    </TableRow>
  )
}

export default TableNotDataFoundLine
