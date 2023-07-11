import { FC } from 'react'
import { OrderDetailList, OrderSummaryWrapper, OrderCancellationModal } from 'components'
import { DeliveryType } from 'types'
import { Stack } from '@mui/material'
import { calculateTotalPrice, TAX } from 'utils'
import { Button, DetailsListTitle } from 'UI'
import { useIsModal } from 'hooks'
import {
  SidebarDeliveryActionsWrapper,
  SidebarDeliveryInfoWrapper,
} from './SidebarDeliveryInfo.styled'

interface SidebarDeliveryInfoProps {
  deliveryInfo?: DeliveryType
  isLoading?: boolean
  statusCheck?: boolean
  titleButton?: string
  withButtonCancel?: boolean
  onCancel?: (id: string) => void
  onSubmit?: (id: string) => void
}

const SidebarDeliveryInfo: FC<SidebarDeliveryInfoProps> = ({
  deliveryInfo,
  isLoading,
  statusCheck,
  titleButton,
  withButtonCancel,
  onSubmit,
  onCancel,
}) => {
  const { handleToggleIsOpenModal, isOpen } = useIsModal()
  const handleSubmit = () => {
    if (onSubmit && deliveryInfo?.id) onSubmit(deliveryInfo?.id)
  }

  const handleToggleModal = () => {
    handleToggleIsOpenModal()
  }
  const handleConfirmCancel = () => {
    if (onCancel && deliveryInfo?.id) onCancel(deliveryInfo?.id)
    handleToggleIsOpenModal()
  }

  return (
    <SidebarDeliveryInfoWrapper>
      <Stack flex={1} height="100%">
        <DetailsListTitle
          title="Delivery details"
          orderNumber={deliveryInfo?.order?.orderNumber || 0}
        />
        <OrderDetailList ordersDetail={deliveryInfo?.order} isLoading={isLoading} />
        <SidebarDeliveryActionsWrapper>
          <OrderSummaryWrapper
            tax={TAX}
            total={deliveryInfo?.order ? calculateTotalPrice(deliveryInfo?.order?.dishes) : 0}
          />
          <Stack direction="row" spacing={2.5}>
            {withButtonCancel && (
              <Button
                variant="outlined"
                size="medium"
                type="submit"
                fullWidth
                onClick={deliveryInfo?.id ? handleToggleModal : () => {}}>
                Cancel Delivery
              </Button>
            )}
            {titleButton && (
              <Button
                disabled={
                  !deliveryInfo?.order || (statusCheck && deliveryInfo?.order?.status === 'opened')
                }
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
