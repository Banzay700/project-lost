import { Dispatch, FC, SetStateAction } from 'react'
import { TableRow } from '@mui/material'
import {
  ActionsBillsColumn,
  OrderNumberColumn,
  OrderTypeColumn,
  StatusColumn,
  TableNumberColumn,
  TotalPriceColumn,
} from 'UI'
import { useLazyGetOneBillQuery } from 'store/api'
import { BillsResponseType } from 'types'
import s from './TableBillsLine.module.scss'

interface TableBillsColumnProps {
  element: BillsResponseType
  active: string | null
  setActive: Dispatch<SetStateAction<string | null>>
}

const TableBillsLine: FC<TableBillsColumnProps> = ({ element, active, setActive }) => {
  const [getBill] = useLazyGetOneBillQuery()

  const { table, totalPrice, orderType, orderNumber, id, status } = element
  const backgroundColor = active === id ? 'rgba(0, 0, 0, 0.04)' : 'initial'

  const handleSendBillsData = () => {
    if (id) {
      getBill(id)
      setActive(id)
    }
  }

  return (
    <TableRow hover sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor }}>
      <TableNumberColumn table={table} />

      <OrderNumberColumn orderNumber={orderNumber} />

      <TotalPriceColumn totalPrice={totalPrice} />

      <StatusColumn status={status} />

      <OrderTypeColumn orderType={orderType} />

      <ActionsBillsColumn
        status={status}
        className={s.tableButton}
        handleSendBillsData={handleSendBillsData}
      />
    </TableRow>
  )
}

export default TableBillsLine
