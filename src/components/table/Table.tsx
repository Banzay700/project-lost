import { FC, useEffect, useRef } from 'react'
import { Table as MuiTable, TableBody, TableContainer } from '@mui/material'
import Scrollbar from 'smooth-scrollbar'
import { TableLineWrapper, TableHead } from 'UI'
import { DataTableCellFuncType, TableData } from 'types'

interface TableProps {
  data: TableData[] | undefined
  tableTitles: string[]
  dataTableCell: DataTableCellFuncType<TableData>
}

const Table: FC<TableProps> = ({ data, tableTitles, dataTableCell }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current

    if (container) {
      Scrollbar.init(containerRef.current, { damping: 0.1 })
    }

    return () => {
      if (container) {
        Scrollbar.destroy(container)
      }
    }
  }, [])

  return (
    // <Paper sx={{ maxWidth: 1200, overflowX: 'auto' }} ref={containerRef}>
    <TableContainer sx={{ maxWidth: 1200, overflowX: 'auto' }} ref={containerRef}>
      <MuiTable stickyHeader aria-label="sticky table" sx={{ width: '100%' }}>
        <TableHead data={tableTitles} />
        <TableBody>
          {data?.map((element) => (
            <TableLineWrapper
              element={element}
              key={element.orderNumber}
              dataTableCell={dataTableCell}
            />
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
    // </Paper>
  )
}

export default Table
