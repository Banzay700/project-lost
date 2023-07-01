import { FC } from 'react'
import { OrderDetailList, OrderSummaryWrapper } from 'components'
import { OrderType } from 'types'
import { Stack } from '@mui/material'
import { calculateTotalPrice, TAX } from 'utils'
import { Button, DetailsListTitle } from 'UI'
import {
  SidebarDeliveryActionsWrapper,
  SidebarDeliveryInfoWrapper,
} from './SidebarDeliveryInfo.styled'

interface SidebarDeliveryInfoProps {
  deliveryId?: string
  orderDetail?: OrderType
  isLoading?: boolean
  statusCheck?: boolean
  titleButton?: string
  withButtonCancel?: boolean
  onCancel?: (id: string) => void
  onSubmit?: (id: string) => void
}

const SidebarDeliveryInfo: FC<SidebarDeliveryInfoProps> = ({
  deliveryId,
  orderDetail,
  isLoading,
  statusCheck,
  titleButton,
  withButtonCancel,
  onSubmit,
  onCancel,
}) => {
  const handleSubmit = () => {
    if (onSubmit && deliveryId) onSubmit(deliveryId)
  }

  const handleCancel = () => {
    if (onCancel && deliveryId) onCancel(deliveryId)
  }

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
            {withButtonCancel && (
              <Button
                variant="outlined"
                size="medium"
                type="submit"
                fullWidth
                onClick={handleCancel}>
                Cancel Delivery
              </Button>
            )}
            {titleButton && (
              <Button
                disabled={!orderDetail || (statusCheck && orderDetail?.status === 'opened')}
                variant="contained"
                size="medium"
                type="submit"
                fullWidth
                onClick={handleSubmit}>
                {titleButton}
              </Button>
            )}
          </Stack>
        </SidebarDeliveryActionsWrapper>
      </Stack>
    </SidebarDeliveryInfoWrapper>
  )
}

export default SidebarDeliveryInfo
