import { Dispatch, FC, MouseEvent, SetStateAction } from 'react'
import { TableRow } from '@mui/material'
import { ColumnAction, ColumnInfoChip, ColumnText, TableNumberColumn } from 'UI'
import { BillsType, OrderTypeOfElement } from 'types'
import { IconAddTipAmount, IconPrinter } from 'assets'
import { useLazySendEmailQuery } from 'store/api'
import s from './TableBillsLine.module.scss'

interface TableBillsColumnProps {
  element: BillsType
  active: string | undefined
  setActive: Dispatch<SetStateAction<string | undefined>>
  onClickAction?: (id: string) => void
  onClickLine?: (id: string) => void
}

const TableBillsLine: FC<TableBillsColumnProps> = ({
  element,
  active,
  setActive,
  onClickAction,
  onClickLine,
}) => {
  const { table, totalPrice, orderType, orderNumber, id, status } = element
  const backgroundColor = active === id ? 'rgba(0, 0, 0, 0.04)' : 'initial'
  const [sendEmail] = useLazySendEmailQuery()

  const handleSendEmail = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (id) {
      sendEmail(id)
      console.log(element)
    }
  }

  const handleSendBillsData = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (onClickAction && id) {
      onClickAction(id)
      setActive(id)
    }
  }

  const handleLineWrapperClick = () => {
    if (onClickLine && id) {
      onClickLine(id)
      setActive(id)
    }
  }

  return (
    <TableRow
      hover
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
        cursor: 'pointer',
        backgroundColor,
      }}
      onClick={handleLineWrapperClick}>
      <TableNumberColumn table={table} />

      <ColumnText title={`#${orderNumber}`} textFontWeight={600} />

      <ColumnText title={`$${totalPrice}`} textFontWeight={400} />

      <ColumnInfoChip type={status} />

      <ColumnInfoChip type={orderType as OrderTypeOfElement} />

      {status === 'opened' ? (
        <ColumnAction
          title="Pay Now"
          onClick={handleSendBillsData}
          size="small"
          variant="contained"
          startIcon={<IconAddTipAmount />}
          className={s.tableButton}
        />
      ) : (
        <ColumnAction
          title="Print bill"
          onClick={handleSendEmail}
          size="small"
          variant="outlined"
          startIcon={<IconPrinter />}
          className={s.tableButton}
        />
      )}
    </TableRow>
  )
}

export default TableBillsLine
