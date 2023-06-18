import { CSSProperties, FC, useEffect, useState } from 'react'
import { Table as MuiTable, TableBody, TableContainer } from '@mui/material'
import { useSmoothScrollbar } from 'hooks'
import {
  BillsType,
  DishType,
  OrderType,
  TableDataItem,
  UserType,
  ReservationResponseType,
} from 'types'
import { TableLineSkeleton } from 'UI'
import { TableDishLine } from './table-dish-line'
import { TableHead } from './table-head'
import { TableOrdersLine } from './table-orders-line'
import { TableBillsLine } from './table-bills-line'
import { TableReservationLine } from './table-reservation-line'
import { TableUsersLine } from './table-users-line'

interface TableProps {
  data: TableDataItem[] | undefined
  tableTitles: string[]
  tableType: string
  isLoading?: boolean
  onClickAction?: (id: string) => void
  onClickLine?: (id: string) => void
  alignHead?: 'inherit' | 'center' | 'left' | 'right' | 'justify' | undefined
  tableMinWidth?: CSSProperties['minWidth']
  tableMaxHeight?: CSSProperties['maxHeight']
}

const Table: FC<TableProps> = ({
  data,
  tableTitles,
  tableType,
  isLoading,
  onClickAction,
  onClickLine,
  alignHead,
  tableMinWidth,
  tableMaxHeight,
}) => {
  const containerRef = useSmoothScrollbar<HTMLDivElement>()
  const [active, setActive] = useState<string | undefined>()

  useEffect(() => {
    if (data) {
      const firstElementID = data[0]?.id
      setActive(firstElementID)
    }
  }, [data])

  let skeleton

  if (isLoading) {
    skeleton = <TableLineSkeleton sizeColumn={tableTitles} />
  }

  return (
    <TableContainer ref={containerRef} sx={{ flex: 1, maxHeight: tableMaxHeight }}>
      <MuiTable aria-label="table" sx={{ width: '100%', minWidth: tableMinWidth }}>
        <TableHead data={tableTitles} align={alignHead} />
        <TableBody>
          {skeleton}
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
              <TableReservationLine
                key={element?.id}
                element={element as ReservationResponseType}
              />
            ))}
          {tableType === 'users' &&
            onClickAction &&
            data?.map((user) => (
              <TableUsersLine key={user.id} user={user as UserType} onClickAction={onClickAction} />
            ))}
          {tableType === 'dishes' &&
            data?.map((dish) => (
              <TableDishLine
                key={dish.id}
                dish={dish as DishType}
                onClickAction={onClickAction}
                onClickLine={onClickLine}
              />
            ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  )
}

export default Table
