import { FC, PropsWithChildren } from 'react'
import { Button } from 'UI'
import { Stack } from '@mui/material'
import { useIsModal } from 'hooks/useIsModal.hook'
import { Simulate } from 'react-dom/test-utils'
import { ActionsButtonWrapper } from './ActionsButton.styled'
import OrderCancellationModal from '../../modal-components/order-cancellation-modal/OrderCancellationModal'

interface ActionsButtonProps extends PropsWithChildren {
  titleButton: string
  doubleAction?: boolean
  disabled?: boolean
  onSubmit: () => void
  onCancel?: () => void
}

const ActionsButton: FC<ActionsButtonProps> = ({
  titleButton,
  doubleAction,
  disabled,
  onCancel,
  onSubmit,
  children,
}) => {
  const { handleToggleIsOpenModal, isOpen } = useIsModal()

  const handleClickCancel = () => {
    if (onCancel) handleToggleIsOpenModal()
  }

  const handleConfirmCancel = () => {
    if (onCancel) onCancel()
  }

  return (
    <ActionsButtonWrapper>
      {children}
      {doubleAction && (
        <Stack direction="row" width="100%" sx={{ gap: '20px', maxWidth: '400px' }}>
          <Button variant="outlined" size="small" onClick={handleClickCancel} fullWidth>
            Cancel Delivery
          </Button>
          <Button variant="contained" size="small" onClick={onSubmit} fullWidth disabled={disabled}>
            {titleButton}
          </Button>
        </Stack>
      )}
      {!doubleAction && (
        <Button
          variant="contained"
          size="medium"
          fullWidth
          maxWidth="400px"
          onClick={onSubmit}
          disabled={disabled}>
          {titleButton}
        </Button>
      )}
      <OrderCancellationModal
        open={isOpen}
        onConfirm={handleConfirmCancel}
        onToggleView={handleToggleIsOpenModal}
        titleModal="Delivery cancel"
        messageModal="Are you sure you want to back out?"
      />
    </ActionsButtonWrapper>
  )
}

export default ActionsButton
