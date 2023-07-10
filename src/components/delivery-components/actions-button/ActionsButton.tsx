import { FC, PropsWithChildren } from 'react'
import { Stack } from '@mui/material'

import { Button } from 'UI'
import { useIsModal } from 'hooks'
import { OrderCancellationModal } from 'components/modal-components'
import { ActionsButtonWrapper } from './ActionsButton.styled'

interface ActionsButtonProps extends PropsWithChildren {
  titleButton: string
  doubleAction?: boolean
  disabled?: boolean
  onSubmit: () => void
  onCancel?: () => void
}

const ActionsButton: FC<ActionsButtonProps> = (props) => {
  const { titleButton, doubleAction, disabled, children, onCancel, onSubmit } = props
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
