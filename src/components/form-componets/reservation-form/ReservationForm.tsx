import { FC } from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { Button } from 'UI'
import { Stack } from '@mui/material'
import { ReservationFormType } from 'types/ComponentsReturnType'
import { ReservationTagGroup } from './reservation-tag-group'
import { PartySize } from './party-size'
import { ReservationCalendar } from './reservation-calendar'
import { ReservationTime } from './reservation-time'
import { GuestDetail } from './guest-detail'
import { initialValues, validationSchema } from './ReservationForm.utils'
import s from './ReservationForm.module.scss'

const ReservationForm: FC = () => {
  const handleFormSubmit = (
    values: ReservationFormType,
    actions: FormikHelpers<ReservationFormType>,
  ) => {
    // TODO set action type
    const valuesForSendToDB = ({
      hours,
      minutes,
      ...rest
    }: {
      hours: string
      minutes: string
    }) => ({
      ...rest,
      time: `${hours}:${minutes}`,
    })

    console.log(valuesForSendToDB(values))
    actions.resetForm()
  }

  const handleFormReset = (
    values: ReservationFormType,
    formikBag: FormikHelpers<ReservationFormType>,
  ) => {
    formikBag.resetForm()
  }

  return (
    <div style={{ maxWidth: '631px' }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
        onReset={handleFormReset}>
        <Form className={s.reservationForm}>
          <ReservationTagGroup name="tags" label="Tag" />
          <ReservationCalendar name="date" label="Select date" />
          <ReservationTime label="Select time" />
          <PartySize label="Select party size" seats={8} name="partySize" />
          <GuestDetail />
          <Stack sx={{ marginTop: '24px', flexDirection: 'row', gap: '12px' }}>
            <Button variant="outlined" size="default" type="reset" fullWidth>
              Cancel
            </Button>
            <Button variant="contained" size="default" type="submit" fullWidth>
              Add to reservation
            </Button>
          </Stack>
        </Form>
      </Formik>
    </div>
  )
}

export default ReservationForm
