import { FC } from 'react'
import { Modal } from 'UI/index'
import { useIsModal } from 'hooks'
import { DeliveryFormType, OrderActiveType } from 'types'
import { formatPhoneNumber } from 'utils/formatPhoneNumber'
import { DeliveryForm } from './delivery-form'
import { DeliveryPayment } from './delivery-payment'
import { DeliveryConfirmation } from './delivery-confirmation'

interface DeliveryModalsProps {
  deliveryFormInfo: DeliveryFormType | undefined
  activeOrder: OrderActiveType
  isFormModal: boolean
  onClose: () => void
  onConfirm: () => void
  onSubmit: (value: DeliveryFormType) => void
  handleFormIsOpenModal: (delay?: number) => void
}

const DeliveryModals: FC<DeliveryModalsProps> = ({
  deliveryFormInfo,
  isFormModal,
  activeOrder,
  onClose,
  onSubmit,
  onConfirm,
  handleFormIsOpenModal,
}) => {
  const { isOpen, handleToggleIsOpenModal } = useIsModal()
  const handleCloseModalForm = () => {
    onClose()
    handleFormIsOpenModal()
  }

  const handleCloseModalPayment = () => {
    onClose()
    handleToggleIsOpenModal()
  }

  const handleOnConfirmModal = () => {
    onConfirm()
    handleToggleIsOpenModal()
  }

  const handleOnSubmitModal = (value: DeliveryFormType) => {
    const formattedValues = formatPhoneNumber(value)
    onSubmit(formattedValues)
    handleToggleIsOpenModal()
  }

  return (
    <>
      <Modal
        title="Delivery info"
        colorHeader="secondary"
        isOpen={isFormModal}
        onClose={handleCloseModalForm}
        linkageToForm="create-delivery-info"
        removeBgClosed>
        <DeliveryForm onSubmit={handleOnSubmitModal} linkageToForm="create-delivery-info" />
      </Modal>
      <Modal
        title="Order confirmation"
        colorHeader="secondary"
        isOpen={isOpen}
        onClose={handleCloseModalPayment}
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
