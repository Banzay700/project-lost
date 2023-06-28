import { FC } from 'react'
import { Modal } from 'UI/index'
import { useIsModal } from 'hooks'
import { DeliveryFormType, OrderActiveType } from 'types'
import { DeliveryForm } from './delivery-form'
import { DeliveryPayment } from './delivery-payment'
import { DeliveryConfirmation } from './delivery-confirmation'

interface DeliveryModalsProps {
  deliveryFormInfo: DeliveryFormType | undefined
  activeOrder: OrderActiveType
  isOpened: boolean
  onClose: () => void
  onConfirm: () => void
  onSubmit: (value: DeliveryFormType) => void
}

const DeliveryModals: FC<DeliveryModalsProps> = (props) => {
  const { deliveryFormInfo, isOpened, activeOrder, onClose, onSubmit, onConfirm } = props
  const { isOpen, handleToggleIsOpenModal } = useIsModal()
  const handleCloseModal = () => {
    onClose()
    handleToggleIsOpenModal()
  }

  const handleOnConfirmModal = () => {
    onConfirm()
    handleToggleIsOpenModal()
  }

  const handleOnSubmitModal = (value: DeliveryFormType) => {
    onSubmit(value)
    handleToggleIsOpenModal()
  }

  return (
    <>
      <Modal
        title="Delivery info"
        colorHeader="secondary"
        isOpen={isOpened}
        onClose={handleCloseModal}
        linkageToForm="create-delivery-info"
        removeBgClosed>
        <DeliveryForm onSubmit={handleOnSubmitModal} linkageToForm="create-delivery-info" />
      </Modal>
      <Modal
        title="Order confirmation"
        colorHeader="secondary"
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleOnConfirmModal}
        actionAdditionalComponent={
          <DeliveryPayment paymentMethod={deliveryFormInfo?.clientInfo.paymentMethod} />
        }
        removeBgClosed>
        <DeliveryConfirmation data={activeOrder} deliveryFormInfo={deliveryFormInfo} />
      </Modal>
    </>
  )
}

export default DeliveryModals
