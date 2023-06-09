import { FC, useState } from 'react'
import { Form, Formik } from 'formik'
import { Button } from 'UI'
import { ReservationFormType } from 'types/ComponentsReturnType'
import { ReservationTagGroup } from './reservation-tag-group'
import { PartySize } from './party-size'
import { ReservationCalendar } from './reservation-calendar'
import { initialValues, validationSchema, SetFormValues } from './ReservationForm.utils'

const ReservationForm: FC = () => {
  const [formValues, setFormValues] = useState(initialValues)

  const handleSetFormValues = (fieldName: string, value: SetFormValues) => {
    setFormValues((prevState) => ({ ...prevState, [fieldName]: value }))
  }

  const handleFormSubmit = (values: ReservationFormType, actions: any) => {
    console.log(values)
    actions.resetForm()
    setFormValues(initialValues)
  }

  return (
    <div style={{ maxWidth: '500px' }}>
      <Formik
        initialValues={formValues || initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
        enableReinitialize>
        <Form>
          <PartySize
            label="Select party size"
            seats={8}
            handleSetFormValues={handleSetFormValues}
          />
          <ReservationCalendar label="Select date" handleSetFormValues={handleSetFormValues} />
          <ReservationTagGroup label="Tag" handleSetFormValues={handleSetFormValues} />
          <Button variant="contained" size="default" type="submit">
            Add to reservation
          </Button>
        </Form>
      </Formik>
    </div>
  )
}

export default ReservationForm
