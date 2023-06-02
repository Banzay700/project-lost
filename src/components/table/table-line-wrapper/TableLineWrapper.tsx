import { Dispatch, FC, MouseEvent, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import { TableRow } from '@mui/material'
import {
  TableNumberColumn,
  OrderNumberColumn,
  TotalPriceColumn,
  OrderTypeColumn,
  StatusColumn,
  ActionsOrdersColumn,
  ActionsBillsColumn,
} from 'UI'
import { useRootLocationPath } from 'hooks'
import { useCreateBillMutation, useLazyGetOneBillQuery, useLazyGetOrderQuery } from 'store/api'
import { OrderResponseType, TableDataItem } from 'types'
import { ROUTES } from 'routes'
import { prepareBillsData } from './tableLineWrapper.unils'
import s from './TableLineWrapper.module.scss'

interface TableLineItemProps {
  element: TableDataItem
  active: string | null
  setActive: Dispatch<SetStateAction<string | null>>
  tableType?: string
}

const TableLineWrapper: FC<TableLineItemProps> = ({ element, active, setActive, tableType }) => {
  const location = useRootLocationPath()
  const navigate = useNavigate()
  const [trigger] = useLazyGetOrderQuery()
  const [createBills] = useCreateBillMutation()
  const [getBill] = useLazyGetOneBillQuery()

  const { table, totalPrice, orderType, orderNumber, id, status } = element

  const isBills = tableType === ROUTES.BILLS
  const cursor = location === ROUTES.BILLS ? 'initial' : 'pointer'
  const backgroundColor = active === id ? 'rgba(0, 0, 0, 0.04)' : 'initial'

  const handleLineWrapperClick = () => {
    if (id) {
      trigger(id)

      if (location === ROUTES.ORDERS) {
        setActive(id)
      }
    }
  }

  const handleSendOrder = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    const dataOrder = prepareBillsData(element as OrderResponseType)
    await createBills(dataOrder)
    navigate(`/${ROUTES.BILLS}`)
  }

  const handleSendBillsData = () => {
    if (id) {
      getBill(id)
      setActive(id)
    }
  }

  if (status !== 'opened') return null

  return (
    <TableRow
      hover
      sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor, backgroundColor }}
      onClick={handleLineWrapperClick}>
      <TableNumberColumn table={table} />

      <OrderNumberColumn orderNumber={orderNumber} />

      <TotalPriceColumn totalPrice={totalPrice} />

      {isBills && <StatusColumn status={status} />}

      <OrderTypeColumn orderType={orderType} />

      {isBills && (
        <ActionsBillsColumn
          status={status}
          className={s.tableButton}
          handleSendBillsData={handleSendBillsData}
        />
      )}

      {!isBills && (
        <ActionsOrdersColumn handleSendOrder={handleSendOrder} className={s.tableButton} />
      )}
    </TableRow>
  )
}

export default TableLineWrapper
