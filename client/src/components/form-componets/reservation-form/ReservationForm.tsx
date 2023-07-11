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
  tags,
  validationSchema,
  prepareReservationData,
} from './ReservationForm.utils'
import { ReservationFormWrapper, ButtonWrapper, FormWrapper } from './ReservationForm.styled'

interface ReservationFormProps {
  handleShowForm: () => void
}

const ReservationForm: FC<ReservationFormProps> = ({ handleShowForm }) => {
  const { activeTable } = useReservationReducer()
  const [addNewReservation] = useCreateReservationMutation()
  const [getTableCanvasDataTrigger] = useLazyGetTablesCanvasQuery()

  const handleFormSubmit = (
    values: ReservationFormType,
    actions: FormikHelpers<ReservationFormType>,
  ) => {
    const reservationInfo = prepareReservationData(values, activeTable)

    addNewReservation(reservationInfo)
    handleShowForm()
    getTableCanvasDataTrigger()
    actions.resetForm()
  }

  return (
    <ReservationFormWrapper>
      <Typography variant="h1" color="primary.main" sx={{ marginBottom: '30px' }}>
        New Reservation
      </Typography>
      <Formik
        initialValues={initialValues as ReservationFormType}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}>
        <FormWrapper>
          <Stack flex={1} gap="16px">
            <CheckboxTagGroup name="tags" label="Visit Tags" data={tags} />
            <ReservationCalendar name="date" label="Select date" />
            <ReservationTime label="Select time" />
            <PartySize label="Select party size" name="persons" maxSeats={activeTable.seats} />
            <GuestDetail />
          </Stack>
          <ButtonWrapper>
            <Button
              variant="outlined"
              size="medium"
              type="reset"
              onClick={handleShowForm}
              fullWidth>
              Cancel
            </Button>
            <Button variant="contained" size="medium" type="submit" fullWidth>
              Add to reservation
            </Button>
          </ButtonWrapper>
        </FormWrapper>
      </Formik>
    </ReservationFormWrapper>
  )
}

export default ReservationForm
