import { FC } from 'react'
import { Modal } from 'UI'
import { DishPartialType, DishType } from 'types'
import { UpdateDishForm } from 'components/form-componets'

interface ModalUpdateDishInfoProps {
  isOpenModal: boolean
  title: string
  linkageToForm: string
  initialValues: DishType
  onCloseModal: () => void
  onSubmit: (value: DishPartialType) => void
}

const ModalUpdateDishInfo: FC<ModalUpdateDishInfoProps> = ({
  isOpenModal,
  title,
  initialValues,
  onCloseModal,
  onSubmit,
  linkageToForm,
}) => {
  return (
    <Modal
      isOpen={isOpenModal}
      title={`Update ${title}`}
      onClose={onCloseModal}
      linkageToForm={linkageToForm}
      colorHeader="primary">
      <UpdateDishForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        linkageToForm={linkageToForm}
      />
    </Modal>
  )
}

export default ModalUpdateDishInfo
