import { FC } from 'react'
import { Formik } from 'formik'
import { Input, SelectInput } from 'UI/index'
import { DeliveryFormType } from 'types/index'
import { initialValues, validationSchema, selectMenuItems } from './DeliveryForm.utils'
import { DeliveryFormContainer } from './DeliveryForm.styled'

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
        <Input placeholder="City" name="clientInfo.address.city" label="City" />
        <Input placeholder="Phone Number" name="clientInfo.phoneNumber" label="Phone Number" />
        <Input placeholder="Street" name="clientInfo.address.street" label="Street" />
        <Input placeholder="Email" name="clientInfo.email" label="Email" />
        <Input placeholder="Apartment" name="clientInfo.address.apartment" label="Apartment" />
        <Input placeholder="Description" name="clientInfo.description" label="Description" />
        <Input placeholder="Delivery Time" name="time" label="Delivery Time" />
        <SelectInput
          name="clientInfo.paymentMethod"
          label="Payment Method"
          data={selectMenuItems}
        />
      </DeliveryFormContainer>
    </Formik>
  )
}

export default DeliveryForm
