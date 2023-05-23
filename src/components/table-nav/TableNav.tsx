import { CSSProperties, FC } from 'react'
import { Table, TableBody, TableContainer, Paper } from '@mui/material'
import { TableLineWrapper, TableHead } from 'UI'
import { DataTableCellType, TableDataMok } from 'types'
import { transformTableTitle } from './tableNav.utils'

interface TableNavProps {
  data: TableDataMok[]
  tableTitles: string[]
  dataTableCellFunc: DataTableCellType
  fontSize?: CSSProperties['fontSize']
  borderBottom?: CSSProperties['borderBottom']
  textTransform?: CSSProperties['textTransform']
  align?: 'inherit' | 'center' | 'left' | 'right' | 'justify' | undefined
}

const TableNav: FC<TableNavProps> = ({
  data,
  tableTitles,
  fontSize,
  borderBottom,
  textTransform,
  align,
  dataTableCellFunc,
}) => {
  const dataTile = transformTableTitle(data, tableTitles)

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 625 }}>
      <Table sx={{ minWidth: 900 }} aria-label="simple table">
        <TableHead
          data={dataTile}
          borderBottom={borderBottom || '2px solid #E4E4E4'}
          align={align || 'center'}
          textTransform={textTransform || 'uppercase'}
          fontSize={fontSize || '12px'}
        />
        <TableBody>
          {data.map((element) => (
            <TableLineWrapper
              element={element}
              key={element.orderNumber}
              dataTableCellFunc={dataTableCellFunc}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableNav
