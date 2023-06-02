import { FC, useState } from 'react'
import { Table as MuiTable, TableBody, TableContainer } from '@mui/material'
import { useSmoothScrollbar } from 'hooks'
import { TableDataItem } from 'types'
import { TableLineWrapper } from './table-line-wrapper'
import { TableHead } from './table-head'

interface TableProps {
  data: TableDataItem[] | undefined
  tableTitles: string[]
  tableType?: string
}

const Table: FC<TableProps> = ({ data, tableTitles, tableType }) => {
  const containerRef = useSmoothScrollbar<HTMLDivElement>()
  const [active, setActive] = useState<string | null>(null)

  return (
    <TableContainer ref={containerRef} sx={{ overflow: 'auto', minWidth: '900px' }}>
      <MuiTable aria-label="table" sx={{ width: '100%' }}>
        <TableHead data={tableTitles} />
        <TableBody>
          {data?.map((element) => (
            <TableLineWrapper
              element={element}
              key={element.id}
              active={active}
              setActive={setActive}
              tableType={tableType}
            />
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  )
}

export default Table
