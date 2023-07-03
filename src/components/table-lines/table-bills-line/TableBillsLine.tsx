import { Dispatch, FC, MouseEvent, SetStateAction } from 'react'
import { TableRow } from '@mui/material'
import { ColumnAction, ColumnInfoChip, ColumnText, TableNumberColumn } from 'UI/index'
import { BillsType, OrderTypeOfElement } from 'types/index'
import { Icon } from 'assets/index'

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
        cursor: 'pointer',
        backgroundColor,
        height: '88px',
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
          startIcon={<Icon.Tip />}
        />
      ) : (
        <ColumnAction
          title="Print bill"
          type="print"
          size="small"
          variant="outlined"
          startIcon={<Icon.Printer />}
          element={element}
        />
      )}
    </TableRow>
  )
}

export default TableBillsLine
