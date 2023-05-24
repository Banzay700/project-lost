import { FC } from 'react'
import { Table as MuiTable, TableBody, TableContainer, Paper } from '@mui/material'
import { TableLineWrapper, TableHead } from 'UI'
import { dataTableCell, tableTitle } from 'utils'
import { TableDataMok } from 'types'
import { transformTableTitle } from './table.utils'

interface TableNavProps {
  data: TableDataMok[]
}

const Table: FC<TableNavProps> = ({ data }) => {
  const dataTile = transformTableTitle(data, tableTitle)
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 625 }}>
      <MuiTable sx={{ minWidth: 900 }} aria-label="simple table">
        <TableHead
          data={dataTile}
          borderBottom="2px solid #E4E4E4"
          align="center"
          textTransform="uppercase"
          fontSize="12px"
        />
        <TableBody>
          {data.map((element) => (
            <TableLineWrapper
              element={element}
              key={element.orderNumber}
              dataTableCellFunc={dataTableCell}
            />
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  )
}

export default Table
