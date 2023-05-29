import { FC } from 'react'
import { Table as MuiTable, TableBody, TableContainer } from '@mui/material'
import { TableLineWrapper, TableHead } from 'UI'
import { DataTableCellFuncType, TableDataItem } from 'types'
import { useSmoothScrollbar } from 'hooks/useSmoothScrollbar.hook'

interface TableProps {
  data: TableDataItem[] | undefined
  tableTitles: string[]
  dataTableCell: DataTableCellFuncType<TableDataItem>
  onClick?: (dataOrder: TableDataItem) => void
}

const Table: FC<TableProps> = ({ data, tableTitles, dataTableCell, onClick }) => {
  const containerRef = useSmoothScrollbar<HTMLDivElement>()

  return (
    // <Paper sx={{ maxWidth: 1200, overflowX: 'auto' }} ref={containerRef}>
    <TableContainer sx={{ overflowX: 'auto' }} ref={containerRef}>
      <MuiTable stickyHeader aria-label="sticky table" sx={{ width: '100%' }}>
        <TableHead data={tableTitles} />
        <TableBody>
          {data?.map((element) => (
            <TableLineWrapper
              element={element}
              key={element.id}
              dataTableCell={dataTableCell}
              onClick={onClick}
            />
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
    // </Paper>
  )
}

export default Table
