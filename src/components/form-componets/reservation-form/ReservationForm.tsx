import { FC } from 'react'
import { Formik, FormikHelpers } from 'formik'
import { Button } from 'UI'
import { Stack, Typography } from '@mui/material'

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
import {
  ReservationFormStyle,
  ReservationFormWrapper,
  ButtonWrapper,
} from './ReservationForm.styled'

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
    <ReservationFormWrapper>
      <Typography variant="h1" color="primary.main" sx={{ marginBottom: '30px' }}>
        New Reservation
      </Typography>
      <Formik
        initialValues={initialValues as ReservationFormType}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}>
        <ReservationFormStyle>
          <CheckboxTagGroup name="tags" label="Visit Tags" data={tags} />
          <ReservationCalendar name="date" label="Select date" />
          <ReservationTime label="Select time" />
          <PartySize
            label="Select party size"
            maxSeats={activeTable.seats}
            seats={8}
            name="persons"
          />
          <GuestDetail />
          <ButtonWrapper>
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
          </ButtonWrapper>
        </ReservationFormStyle>
      </Formik>
    </ReservationFormWrapper>
  )
}

export default ReservationForm
