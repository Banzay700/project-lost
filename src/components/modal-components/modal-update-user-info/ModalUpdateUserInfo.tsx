import { FC, useEffect, useState } from 'react'
import { Modal, SelectInput } from 'UI'
import { Form, Formik } from 'formik'
import { UserPartialType } from 'types'
import { selectInputItemsRole, selectInputItemsStatus } from './modalUpdateUserInfo.utils'

interface ModalUpdateUserInfoProps {
  isOpenModal: boolean
  title: string
  initialValues: UserPartialType
  onCloseModal: () => void
  onSubmit: (value: UserPartialType) => void
}

const ModalUpdateUserInfo: FC<ModalUpdateUserInfoProps> = ({
  isOpenModal,
  title,
  initialValues,
  onCloseModal,
  onSubmit,
}) => {
  const [formValues, setFormValues] = useState(initialValues)

  useEffect(() => {
    setFormValues(initialValues)
  }, [initialValues])

  return (
    <Modal
      isOpen={isOpenModal}
      title={`Update ${title}`}
      onClose={onCloseModal}
      linkageToForm="update-user">
      <Formik initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
        <Form id="update-user" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <SelectInput name="role" label="Role" data={selectInputItemsRole} />
          <SelectInput name="status" label="Status" data={selectInputItemsStatus} />
        </Form>
      </Formik>
    </Modal>
  )
}

export default ModalUpdateUserInfo
