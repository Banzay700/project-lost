import { CSSProperties, FC } from 'react'
import { TableCell, TableRow, TableHead as TableHeadMui } from '@mui/material'

interface TableHeadProps {
  data: string[]
  fontSize?: CSSProperties['fontSize']
  borderBottom?: CSSProperties['borderBottom']
  textTransform?: CSSProperties['textTransform']
  align?: 'inherit' | 'center' | 'left' | 'right' | 'justify' | undefined
}

const TableHead: FC<TableHeadProps> = ({ data, textTransform, fontSize, borderBottom, align }) => {
  return (
    <TableHeadMui sx={{ borderBottom }}>
      <TableRow>
        {data.map((item) => (
          <TableCell key={item} align={align} sx={{ textTransform, fontSize }}>
            {item}
          </TableCell>
        ))}
      </TableRow>
    </TableHeadMui>
  )
}

export default TableHead
