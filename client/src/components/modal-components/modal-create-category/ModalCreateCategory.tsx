import { FC } from 'react'
import { Modal } from 'UI'
import { CreateDishCategoryForm } from 'components'
import { CreateCategoryFormReturnType } from 'types'

interface ModalCreateCategoryProps {
  isOpenModal: boolean
  title: string
  onCloseModal: () => void
  onSubmit: (value: CreateCategoryFormReturnType) => void
  linkageToForm: string
}

const ModalCreateCategory: FC<ModalCreateCategoryProps> = ({
  isOpenModal,
  title,
  linkageToForm,
  onCloseModal,
  onSubmit,
}) => {
  return (
    <Modal
      isOpen={isOpenModal}
      title={title}
      onClose={onCloseModal}
      colorHeader="primary"
      linkageToForm={linkageToForm}>
      <CreateDishCategoryForm linkageToForm={linkageToForm} onSubmit={onSubmit} />
    </Modal>
  )
}

export default ModalCreateCategory
