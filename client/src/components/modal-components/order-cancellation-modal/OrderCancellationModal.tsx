import { FC } from 'react'
import { Modal, ModalContentPopup } from 'UI'

interface OrderCancellationModalProps {
  open: boolean
  onToggleView: () => void
  onConfirm: () => void
  titleModal: string
  messageModal: string
}

const OrderCancellationModal: FC<OrderCancellationModalProps> = (props) => {
  const { open, messageModal, titleModal, onToggleView, onConfirm } = props

  return (
    <Modal title={titleModal} isOpen={open} onClose={onToggleView} hiddenActions>
      <ModalContentPopup
        message={messageModal}
        handleConfirm={onConfirm}
        handleReject={onToggleView}
      />
    </Modal>
  )
}

export default OrderCancellationModal
