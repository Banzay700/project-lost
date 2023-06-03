import { FC, useState } from 'react'
import { Table as MuiTable, TableBody, TableContainer } from '@mui/material'
import { useSmoothScrollbar } from 'hooks'
import { BillsResponseType, OrderResponseType, TableDataItem, UserType } from 'types'
import { TableHead } from './table-head'
import { TableOrdersLine } from './table-orders-line'
import { TableBillsLine } from './table-bills-line'
import { TableUsersLine } from './table-users-line'

interface TableProps {
  data: TableDataItem[] | undefined
  tableTitles: string[]
  tableType?: string
  onClick?: (id: string) => void
}

const Table: FC<TableProps> = ({ data, tableTitles, tableType, onClick }) => {
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
          {tableType === 'users' &&
            onClick &&
            data?.map((user) => (
              <TableUsersLine key={user.id} user={user as UserType} onClickAction={onClick} />
            ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  )
}

export default Table
