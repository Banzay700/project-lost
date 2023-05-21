import { FC } from 'react'
import { Table, TableBody, TableContainer, Paper } from '@mui/material'
import { TableLineWrapper, TableHead } from 'UI'
import { TableDataMok } from 'types'
import { transformTableTitle } from './tableNav.utils'

interface TableNavProps {
  data: TableDataMok[]
}

const TableNav: FC<TableNavProps> = ({ data }) => {
  const dataTile = transformTableTitle(data)
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 625 }}>
      <Table sx={{ minWidth: 900 }} aria-label="simple table">
        <TableHead
          data={dataTile}
          borderBottom="2px solid #E4E4E4"
          align="center"
          textTransform="uppercase"
          fontSize="12px"
        />
        <TableBody>
          {data.map((element) => (
            <TableLineWrapper element={element} key={element.orderNumber} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableNav
