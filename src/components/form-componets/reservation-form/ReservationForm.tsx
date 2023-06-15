import { FC } from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { Button } from 'UI'
import { Stack } from '@mui/material'

import { CheckboxTagGroup } from 'components'
import { useReservationReducer } from 'hooks'
import { ReservationFormType } from 'types'
import { useCreateReservationMutation, useLazyGetTablesCanvasQuery } from 'store/api'
import { PartySize } from './party-size'
import { ReservationCalendar } from './reservation-calendar'
import { ReservationTime } from './reservation-time'
import { GuestDetail } from './guest-detail'
import {
  initialValues,
  prepareReservationData,
  tags,
  validationSchema,
} from './ReservationForm.utils'
import s from './ReservationForm.module.scss'

interface ReservationFormProps {
  cancelHandleFunc: () => void
}

const ReservationForm: FC<ReservationFormProps> = (props) => {
  const { cancelHandleFunc } = props
  const { activeTable } = useReservationReducer()
  const [addNewReservation] = useCreateReservationMutation()
  const [getTableCanvasDataTrigger] = useLazyGetTablesCanvasQuery()

  const handleFormSubmit = (
    values: ReservationFormType,
    actions: FormikHelpers<ReservationFormType>,
  ) => {
    const reservationInfo = prepareReservationData(values, activeTable)

    addNewReservation(reservationInfo)
    getTableCanvasDataTrigger()
    actions.resetForm()
  }

  const handleFormReset = () => cancelHandleFunc()

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
          <PartySize label="Select party size" seats={8} name="persons" />
          <GuestDetail />
          <Stack sx={{ marginTop: '24px', flexDirection: 'row', gap: '12px' }}>
            <Button
              variant="outlined"
              size="medium"
              type="reset"
              fullWidth
              onClick={handleFormReset}>
              Cancel
            </Button>
            <Button variant="contained" size="medium" type="submit" fullWidth>
              Add to reservation
            </Button>
          </Stack>
        </Form>
      </Formik>
    </Stack>
  )
}

export default ReservationForm
