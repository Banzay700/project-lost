import { FC, useState } from 'react'
import { Table as MuiTable, TableBody, TableContainer } from '@mui/material'
import { useSmoothScrollbar } from 'hooks'
import { BillsResponseType, OrderResponseType, TableDataItem } from 'types'
import { TableHead } from './table-head'
import { TableOrdersLine } from './table-orders-line'
import { TableBillsLine } from './table-bills-line'

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
          {tableType === 'orders' &&
            data?.map((element) => (
              <TableOrdersLine
                element={element as OrderResponseType}
                active={active}
                setActive={setActive}
                key={element?.id}
              />
            ))}
          {tableType === 'bills' &&
            data?.map((element) => (
              <TableBillsLine
                element={element as BillsResponseType}
                active={active}
                setActive={setActive}
                key={element?.id}
              />
            ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  )
}

export default Table
