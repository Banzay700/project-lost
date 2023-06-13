import { FC } from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { Button } from 'UI'
import { Stack } from '@mui/material'
import { ReservationFormType } from 'types/ComponentsReturnType'
import { CheckboxTagGroup } from 'components/input-form/checkbox-tag-group'
import { PartySize } from './party-size'
import { ReservationCalendar } from './reservation-calendar'
import { ReservationTime } from './reservation-time'
import { GuestDetail } from './guest-detail'
import { initialValues, tags, validationSchema } from './ReservationForm.utils'
import s from './ReservationForm.module.scss'

interface ReservationFormProps {
  cancelHandleFunc: (status: boolean) => void
}

const ReservationForm: FC<ReservationFormProps> = (props) => {
  const { cancelHandleFunc } = props

  const handleFormSubmit = (
    values: ReservationFormType,
    actions: FormikHelpers<ReservationFormType>,
  ) => {
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

  const handleFormReset = () => cancelHandleFunc(false)

  return (
    <Stack style={{ height: '100% ' }} justifyContent="center" alignItems="center">
      <Formik
        initialValues={initialValues as ReservationFormType}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}>
        <Form className={s.reservationForm}>
          <CheckboxTagGroup name="tags" label="Tag" data={tags} />
          <ReservationCalendar name="date" label="Select date" />
          <ReservationTime label="Select time" />
          <PartySize label="Select party size" seats={8} name="partySize" />
          <GuestDetail />
          <Stack sx={{ marginTop: '24px', flexDirection: 'row', gap: '12px' }}>
            <Button
              variant="outlined"
              size="default"
              type="reset"
              fullWidth
              onClick={handleFormReset}>
              Cancel
            </Button>
            <Button variant="contained" size="default" type="submit" fullWidth>
              Add to reservation
            </Button>
          </Stack>
        </Form>
      </Formik>
    </Stack>
  )
}

export default ReservationForm
