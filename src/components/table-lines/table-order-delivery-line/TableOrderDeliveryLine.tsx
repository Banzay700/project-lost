import { FC, MouseEvent } from 'react'
import { TableRow } from '@mui/material'
import { ColumnAction, ColumnInfoTag, ColumnText } from 'UI/table-row-columns'
import { DeliveryAddressType } from 'types/DeliveryType'
import ColumnPhoneRedirect from '../../../UI/table-row-columns/column-phone-redirect/ColumnPhoneRedirect'

interface TableOrderDeliveryLineProps {
  id: string
  isActive: string
  clientName: string
  phoneNumber: string
  deliveryAddress: DeliveryAddressType
  status: {
    type?: 'blue' | 'primary' | 'yellow' | 'green' | 'red' | 'default'
    label: string
  }
  onClickAction?: (id: string) => void
  onClickLine?: (id: string) => void
  onClickOpenAddressInfo?: (value: DeliveryAddressType) => void
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
  onClickOpenAddressInfo,
}) => {
  const handleClickAction = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (onClickAction) onClickAction(id)
  }

  const handleClickLine = () => {
    if (onClickLine && id !== isActive) onClickLine(id)
  }

  const handleDeliveryAddressInfo = () => {
    if (onClickOpenAddressInfo) onClickOpenAddressInfo(deliveryAddress)
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
      <ColumnText
        title={onClickOpenAddressInfo ? 'Open Detail info address' : deliveryAddress.street}
        textColor={onClickOpenAddressInfo ? 'primary' : 'secondary'}
        textFontWeight={onClickOpenAddressInfo ? 600 : 400}
        onClick={handleDeliveryAddressInfo}
      />
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
