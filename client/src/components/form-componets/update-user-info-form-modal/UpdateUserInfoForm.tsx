import { FC } from 'react'
import { Form, Formik } from 'formik'
import { SelectInput } from 'UI'
import { UserPartialType } from 'types'
import {
  selectInputItemsRole,
  selectInputItemsStatus,
  validationSchema,
} from './updateUserInfoForm.utils'

interface FormUpdateUserInfoProps {
  initialValues: UserPartialType
  linkageToForm: string
  onSubmit: (value: UserPartialType) => void
}

const UpdateUserInfoForm: FC<FormUpdateUserInfoProps> = ({
  initialValues,
  linkageToForm,
  onSubmit,
}) => {
  const formikConfig = {
    initialValues,
    validationSchema,
  }

  return (
    <Formik {...formikConfig} onSubmit={onSubmit} enableReinitialize>
      <Form id={linkageToForm} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <SelectInput name="role" label="Role" data={selectInputItemsRole} />
        <SelectInput name="status" label="Status" data={selectInputItemsStatus} />
      </Form>
    </Formik>
  )
}

export default UpdateUserInfoForm
