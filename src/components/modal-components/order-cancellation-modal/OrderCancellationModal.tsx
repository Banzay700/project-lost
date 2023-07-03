import { FC } from 'react'
import { Modal, ModalContentPopup } from 'UI'

interface OrderCancellationModalProps {
  open: boolean
  order: number
  onToggleView: () => void
  onConfirm: () => void
}

const OrderCancellationModal: FC<OrderCancellationModalProps> = (props) => {
  const { open, order, onToggleView, onConfirm } = props

  return (
    <Modal
      title="Сonfirmation of order deletion"
      isOpen={open}
      onClose={onToggleView}
      hiddenActions>
      <ModalContentPopup
        message={`Are you sure you want to cancel order #${order}?`}
        handleConfirm={onConfirm}
        handleReject={onToggleView}
      />
    </Modal>
  )
}

export default OrderCancellationModal
