import { FC, MouseEvent } from 'react'
import { Stack } from '@mui/material'
import { ColumnInfoTag, ColumnText, ColumnPhoneRedirect, ColumnWithChildren, Button } from 'UI'
import { DeliveryAddressType } from 'types'
import { Icon } from 'assets'
import { TableCommonRow } from '../table-common-row'

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
  const background = isActive === id ? 'rgba(0, 0, 0, 0.04)' : ''

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
    <TableCommonRow hover background={background} onClick={handleClickLine}>
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
    </TableCommonRow>
  )
}

export default TableOrderDeliveryLine
