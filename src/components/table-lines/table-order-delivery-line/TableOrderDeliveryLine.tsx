import { FC, MouseEvent } from 'react'
import { Stack, TableRow } from '@mui/material'
import { ColumnInfoTag, ColumnText, ColumnPhoneRedirect, ColumnWithChildren, Button } from 'UI'
import { DeliveryAddressType } from 'types'
import { Icon } from 'assets'

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
  const handleClickLine = () => {
    if (onClickLine && id !== isActive) onClickLine(id)
  }

  const handleDeliveryAddressInfo = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (onClickOpenAddressInfo) onClickOpenAddressInfo(deliveryAddress)
  }

  const handleSendNotify = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (onClickAction) onClickAction(id)
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
      <ColumnText title={deliveryAddress.street} noWrap maxWidth="100px" />
      <ColumnInfoTag {...status} />
      <ColumnWithChildren>
        <Stack direction="row" sx={{ gap: '15px', width: '100%', justifyContent: 'center' }}>
          {!!onClickOpenAddressInfo && (
            <Button
              variant="contained"
              size="small"
              icon={<Icon.MapMarker />}
              onClick={handleDeliveryAddressInfo}
            />
          )}
          {!!onClickAction && (
            <Button
              variant="contained"
              size="small"
              icon={<Icon.NotifyUser />}
              onClick={handleSendNotify}
            />
          )}
        </Stack>
      </ColumnWithChildren>
    </TableRow>
  )
}

export default TableOrderDeliveryLine
