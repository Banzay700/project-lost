import { Dispatch, FC, MouseEvent, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import { TableRow } from '@mui/material'
import {
  ActionsOrdersColumn,
  OrderNumberColumn,
  OrderTypeColumn,
  TableNumberColumn,
  TotalPriceColumn,
} from 'UI'
import { ROUTES } from 'routes'
import { useCreateBillMutation, useLazyGetOrderQuery } from 'store/api'
import { OrderResponseType } from 'types'
import { prepareBillsData } from './tableOrdersLine.unils'
import s from './TableOrdersLine.module.scss'

interface TableOrdersColumnProps {
  element: OrderResponseType
  active: string | null
  setActive: Dispatch<SetStateAction<string | null>>
}

const TableOrdersLine: FC<TableOrdersColumnProps> = ({ element, active, setActive }) => {
  const navigate = useNavigate()
  const [trigger] = useLazyGetOrderQuery()
  const [createBills] = useCreateBillMutation()

  const { table, totalPrice, orderType, orderNumber, id } = element
  const backgroundColor = active === id ? 'rgba(0, 0, 0, 0.04)' : 'initial'

  const handleLineWrapperClick = () => {
    if (id) {
      trigger(id)
      setActive(id)
    }
  }

  const handleSendOrder = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    const dataOrder = prepareBillsData(element as OrderResponseType)
    await createBills(dataOrder)
    navigate(`/${ROUTES.BILLS}`)
  }

  return (
    <TableRow
      hover
      sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer', backgroundColor }}
      onClick={handleLineWrapperClick}>
      <TableNumberColumn table={table} />

      <OrderNumberColumn orderNumber={orderNumber} />

      <TotalPriceColumn totalPrice={totalPrice} />

      <OrderTypeColumn orderType={orderType} />

      <ActionsOrdersColumn handleSendOrder={handleSendOrder} className={s.tableButton} />
    </TableRow>
  )
}

export default TableOrdersLine
