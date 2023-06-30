import { FC } from 'react'
import { Stack } from '@mui/material'
import { OrderDetailList, OrderSummaryWrapper } from 'components'
import { Button, DetailsListTitle } from 'UI'
import { OrderType } from 'types'
import { TAX } from 'utils'
import {
  SidebarDeliveryActionsWrapper,
  SidebarDeliveryInfoWrapper,
} from './SidebarDeliveryInfo.styled'

interface SidebarDeliveryInfoProps {
  orderDetail?: OrderType
  orderNumber: number
}

const SidebarDeliveryInfo: FC<SidebarDeliveryInfoProps> = ({ orderDetail, orderNumber }) => {
  return (
    <SidebarDeliveryInfoWrapper>
      <Stack flex={1} height="100%">
        <DetailsListTitle title="Delivery details" orderNumber={orderNumber} />
        <OrderDetailList ordersDetail={orderDetail} />
        <SidebarDeliveryActionsWrapper>
          <OrderSummaryWrapper tax={TAX} total={10} />
          <Stack direction="row" spacing={2.5}>
            <Button variant="contained" size="medium" type="submit" fullWidth onClick={() => {}}>
              Take delivery
            </Button>
          </Stack>
        </SidebarDeliveryActionsWrapper>
      </Stack>
    </SidebarDeliveryInfoWrapper>
  )
}

export default SidebarDeliveryInfo
