import { Dispatch, FC, MouseEvent, SetStateAction } from 'react'
import { ColumnAction, ColumnInfoChip, ColumnText, TableNumberColumn } from 'UI'
import { BillsType, OrderTypeOfElement } from 'types'
import { Icon } from 'assets'
import { TableCommonRow } from '../table-common-row'

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
  const disabled = orderType === 'delivery'
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
    <TableCommonRow hover background={backgroundColor} onClick={handleLineWrapperClick}>
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
          disabled={disabled}
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
    </TableCommonRow>
  )
}

export default TableBillsLine
