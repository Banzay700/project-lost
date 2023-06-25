import { FC, useState } from 'react'
import { Modal } from 'UI/index'
import { DeliveryFormType, OrderActiveType } from 'types/index'
import { DeliveryForm } from './delivery-form'
import { DeliveryPayment } from './delivery-payment'
import { DeliveryConfirmation } from './delivery-confirmation'

interface DeliveryModalsProps {
  deliveryForm: DeliveryFormType | undefined
  activeOrder: OrderActiveType
  isOpened: boolean
  onClose: () => void
  onConfirm: () => void
  onSubmit: (value: DeliveryFormType) => void
}

const DeliveryModals: FC<DeliveryModalsProps> = (props) => {
  const { deliveryForm, isOpened, activeOrder, onClose, onSubmit, onConfirm } = props
  const [isOpenedConfirmation, setIsOpenedConfirmation] = useState(false)
  const handleCloseModal = () => {
    onClose()
    setIsOpenedConfirmation(false)
  }

  const handleOnConfirmModal = () => {
    onConfirm()
    setIsOpenedConfirmation(false)
  }

  const handleOnSubmitModal = (value: DeliveryFormType) => {
    onSubmit(value)
    setIsOpenedConfirmation(true)
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
        isOpen={isOpenedConfirmation}
        onClose={handleCloseModal}
        onSubmit={handleOnConfirmModal}
        actionAdditionalComponent={
          <DeliveryPayment paymentMethod={deliveryForm?.clientInfo.paymentMethod} />
        }
        removeBgClosed>
        <DeliveryConfirmation data={activeOrder} deliveryForm={deliveryForm} />
      </Modal>
    </>
  )
}

export default DeliveryModals
