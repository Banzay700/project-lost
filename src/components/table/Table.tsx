import { FC, useEffect, useState } from 'react'
import { Table as MuiTable, TableBody, TableContainer } from '@mui/material'
import { useSmoothScrollbar } from 'hooks'
import { BillsType, OrderType, TableDataItem, UserType } from 'types'
import { Reservation } from 'types/ComponetTableType/TableDataItem'
import { TableHead } from './table-head'
import { TableOrdersLine } from './table-orders-line'
import { TableBillsLine } from './table-bills-line'
import TableReservationLine from './table-reservation-line/TableReservationLine'
import { TableUsersLine } from './table-users-line'

interface TableProps {
  data: TableDataItem[] | undefined
  tableTitles: string[]
  tableType?: string
  onClickAction?: (id: string) => void
  onClickLine?: (id: string) => void
  alignHead?: 'inherit' | 'center' | 'left' | 'right' | 'justify' | undefined
}

const Table: FC<TableProps> = ({
  data,
  tableTitles,
  tableType,
  onClickAction,
  onClickLine,
  alignHead,
}) => {
  const containerRef = useSmoothScrollbar<HTMLDivElement>()
  const [active, setActive] = useState<string | undefined>()

  useEffect(() => {
    if (data) {
      const firstElementID = data[0]?.id
      setActive(firstElementID)
    }
  }, [data])

  return (
    <TableContainer ref={containerRef} sx={{ overflow: 'auto' }}>
      <MuiTable aria-label="table" sx={{ width: '100%' }}>
        <TableHead data={tableTitles} align={alignHead} />
        <TableBody>
          {tableType === 'orders' &&
            data?.map((element) => (
              <TableOrdersLine
                element={element as OrderType}
                key={element?.id}
                active={active}
                setActive={setActive}
                onClickLine={onClickLine}
                onClickAction={onClickAction}
              />
            ))}
          {tableType === 'bills' &&
            data?.map((element) => (
              <TableBillsLine
                element={element as BillsType}
                key={element?.id}
                active={active}
                setActive={setActive}
                onClickAction={onClickAction}
                onClickLine={onClickLine}
              />
            ))}
          {tableType === 'reservation' &&
            data?.map((element) => (
              <TableReservationLine element={element as Reservation} key={element?.id} />
            ))}
          {tableType === 'users' &&
            onClickAction &&
            data?.map((user) => (
              <TableUsersLine key={user.id} user={user as UserType} onClickAction={onClickAction} />
            ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  )
}

export default Table
