import { FC, MouseEvent } from 'react'
import { TableRow } from '@mui/material'
import { ColumnAction, ColumnInfoTag, ColumnText } from 'UI/table-row-columns'
import ColumnPhoneRedirect from '../../../UI/table-row-columns/column-phone-redirect/ColumnPhoneRedirect'

interface TableOrderDeliveryLineProps {
  id: string
  isActive: string
  clientName: string
  phoneNumber: string
  deliveryAddress: string
  status: {
    type?: 'blue' | 'primary' | 'yellow' | 'green' | 'red' | 'default'
    label: string
  }
  onClickAction?: (id: string) => void
  onClickLine?: (id: string) => void
}

const TableOrderDeliveryLine: FC<TableOrderDeliveryLineProps> = ({
  id,
  isActive,
  clientName,
  phoneNumber,
  deliveryAddress,
  status,
  onClickAction,
  onClickLine,
}) => {
  const handleClickAction = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (onClickAction) onClickAction(id)
  }

  const handleClickLine = () => {
    if (onClickLine) onClickLine(id)
  }

  return (
    <TableRow
      hover
      sx={{
        height: '88px',
        cursor: 'pointer',
        background: isActive === id ? 'rgba(0, 0, 0, 0.04)' : '',
      }}
      onClick={handleClickLine}>
      <ColumnText title={clientName} textFontWeight={600} />
      <ColumnPhoneRedirect title={phoneNumber} textFontWeight={400} />
      <ColumnText title={deliveryAddress} textFontWeight={400} />

      <ColumnInfoTag {...status} />

      {onClickAction && (
        <ColumnAction
          title="Notify Client"
          variant="contained"
          size="small"
          onClick={handleClickAction}
        />
      )}
    </TableRow>
  )
}

export default TableOrderDeliveryLine
