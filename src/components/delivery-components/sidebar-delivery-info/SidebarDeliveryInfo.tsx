import { FC } from 'react'
import { OrderDetailList, OrderSummaryWrapper } from 'components'
import { OrderType } from 'types'
import { DetailsListTitle } from 'UI/details-title'
import { Stack } from '@mui/material'
import { calculateTotalPrice, TAX } from 'utils'
import { Button } from 'UI'
import {
  SidebarDeliveryActionsWrapper,
  SidebarDeliveryInfoWrapper,
} from './SidebarDeliveryInfo.styled'

interface SidebarDeliveryInfoProps {
  orderDetail?: OrderType
  isLoading?: boolean
  titleButton: string
  onSubmit?: () => void
}

const SidebarDeliveryInfo: FC<SidebarDeliveryInfoProps> = ({
  orderDetail,
  isLoading,
  titleButton,
  onSubmit,
}) => {
  return (
    <SidebarDeliveryInfoWrapper>
      <Stack flex={1} height="100%">
        <DetailsListTitle title="Delivery details" orderNumber={orderDetail?.orderNumber || 0} />
        <OrderDetailList ordersDetail={orderDetail} isLoading={isLoading} />
        <SidebarDeliveryActionsWrapper>
          <OrderSummaryWrapper
            tax={TAX}
            total={orderDetail ? calculateTotalPrice(orderDetail?.dishes) : 0}
          />
          <Stack direction="row" spacing={2.5}>
            <Button variant="contained" size="medium" type="submit" fullWidth onClick={onSubmit}>
              {titleButton}
            </Button>
          </Stack>
        </SidebarDeliveryActionsWrapper>
      </Stack>
    </SidebarDeliveryInfoWrapper>
  )
}

export default SidebarDeliveryInfo
