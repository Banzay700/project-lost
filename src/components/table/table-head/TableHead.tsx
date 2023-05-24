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
    <TableHeadMui sx={{ borderBottom: borderBottom || '2px solid #E4E4E4' }}>
      <TableRow>
        {data.map((item) => (
          <TableCell
            key={item}
            align={align || 'center'}
            sx={{ textTransform: textTransform || 'uppercase', fontSize: fontSize || '12px' }}>
            {item}
          </TableCell>
        ))}
      </TableRow>
    </TableHeadMui>
  )
}

export default TableHead
