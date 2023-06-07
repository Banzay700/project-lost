import { FC } from 'react'
import { Modal } from 'UI'
import { UserPartialType } from 'types'
import { FormUpdateUserInfo } from 'components'

interface ModalUpdateUserInfoProps {
  isOpenModal: boolean
  title: string
  initialValues: UserPartialType
  linkageToForm: string
  onCloseModal: () => void
  onSubmit: (value: UserPartialType) => void
}

const ModalUpdateUserInfo: FC<ModalUpdateUserInfoProps> = ({
  isOpenModal,
  title,
  initialValues,
  linkageToForm,
  onCloseModal,
  onSubmit,
}) => {
  return (
    <Modal
      isOpen={isOpenModal}
      title={`Update ${title}`}
      onClose={onCloseModal}
      linkageToForm={linkageToForm}
      colorHeader="primary">
      <FormUpdateUserInfo
        onSubmit={onSubmit}
        linkageToForm={linkageToForm}
        initialValues={initialValues}
      />
    </Modal>
  )
}

export default ModalUpdateUserInfo
