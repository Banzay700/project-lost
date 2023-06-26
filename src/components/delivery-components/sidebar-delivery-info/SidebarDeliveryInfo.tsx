import { FC } from 'react'
import { OrderDetailList, OrderSummaryWrapper } from 'components'
import { OrderDetailsItemType } from 'types'
import { DetailsListTitle } from 'UI/details-title'
import { Stack } from '@mui/material'
import { TAX } from 'utils'
import { Button } from 'UI'
import {
  SidebarDeliveryActionsWrapper,
  SidebarDeliveryInfoWrapper,
} from './SidebarDeliveryInfo.styled'

interface SidebarDeliveryInfoProps {
  orderDetail?: OrderDetailsItemType[]
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
              Update Order
            </Button>
            <Button variant="outlined" size="medium" type="submit" fullWidth onClick={() => {}}>
              Cancel Order
            </Button>
          </Stack>
        </SidebarDeliveryActionsWrapper>
      </Stack>
    </SidebarDeliveryInfoWrapper>
  )
}

export default SidebarDeliveryInfo
