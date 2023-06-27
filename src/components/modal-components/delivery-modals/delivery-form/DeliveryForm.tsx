import { FC } from 'react'
import { Formik } from 'formik'
import { Input, SelectInput } from 'UI/index'
import { DeliveryFormType } from 'types/index'
import { initialValues, validationSchema, selectMenuItems } from './DeliveryForm.utils'
import { DeliveryFormContainer } from './DeliveryForm.styled'
import Autocomplete from '../../../autocomplete/Autocomplete'

interface DeliveryFormProps {
  onSubmit: (value: DeliveryFormType) => void
  linkageToForm?: string
}

const DeliveryForm: FC<DeliveryFormProps> = ({ onSubmit, linkageToForm }) => {
  const formikConfig = { initialValues, validationSchema, onSubmit }

  return (
    <Formik {...formikConfig}>
      <DeliveryFormContainer id={linkageToForm}>
        <Input placeholder="Name" name="clientInfo.name" label="Name" />
        <Autocomplete placeholder="Street" name="address.street" label="Street" />
        <Input placeholder="Phone Number" name="clientInfo.phoneNumber" label="Phone Number" />
        <Input
          placeholder="Delivery Time in minuts"
          name="time"
          label="Delivery Time"
          type="number"
        />
        <Input placeholder="Email" name="clientInfo.email" label="Email" />
        <SelectInput
          name="clientInfo.paymentMethod"
          label="Payment Method"
          data={selectMenuItems}
        />
        <Input placeholder="Description" name="clientInfo.description" label="Description" />
      </DeliveryFormContainer>
    </Formik>
  )
}

export default DeliveryForm
