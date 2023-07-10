import { FC } from 'react'
import { OrderDetailList, OrderSummaryWrapper } from 'components'
import { OrderType } from 'types'
import { Stack } from '@mui/material'
import { calculateTotalPrice, TAX } from 'utils'
import { Button, DetailsListTitle } from 'UI'
import { useIsModal } from 'hooks/useIsModal.hook'
import {
  SidebarDeliveryActionsWrapper,
  SidebarDeliveryInfoWrapper,
} from './SidebarDeliveryInfo.styled'
import OrderCancellationModal from '../../modal-components/order-cancellation-modal/OrderCancellationModal'

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
  const { handleToggleIsOpenModal, isOpen } = useIsModal()
  const handleSubmit = () => {
    if (onSubmit && deliveryId) onSubmit(deliveryId)
  }

  const handleToggleModal = () => {
    handleToggleIsOpenModal()
  }
  const handleConfirmCancel = () => {
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
                onClick={onCancel && handleToggleModal}>
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
      <OrderCancellationModal
        open={isOpen}
        onConfirm={handleConfirmCancel}
        onToggleView={handleToggleIsOpenModal}
        titleModal="Delivery cancel"
        messageModal="Are you sure you want to back out?"
      />
    </SidebarDeliveryInfoWrapper>
  )
}

export default SidebarDeliveryInfo
