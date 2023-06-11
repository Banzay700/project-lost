import { FC, SyntheticEvent } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { Button } from 'UI'
import { ROUTES } from 'routes'
import { ReservationCanvasType } from 'types'
import { useLazyGetTablesCanvasQuery, useUpdateReservationMutation } from 'store/api'
import { convertToDate, prepareReservationData } from './reservationModalContent.utils'

interface ReservationModalContentProps {
  reservation: ReservationCanvasType
  onCloseModal: () => void
}

const ReservationModalContent: FC<ReservationModalContentProps> = ({
  reservation,
  onCloseModal,
}) => {
  const navigate = useNavigate()
  const { date, time } = convertToDate(reservation.booking)
  const [updateReservation] = useUpdateReservationMutation()
  const [trigger] = useLazyGetTablesCanvasQuery()

  const handleOpenOrder = () => {
    updateReservation({ ...reservation, status: 'done' })
    navigate(`/${ROUTES.DISHES}`)
  }

  const handleCancelReservation = (e: SyntheticEvent) => {
    e.stopPropagation()
    updateReservation({ ...reservation, status: 'cancelled' })
    trigger()
    onCloseModal()
  }

  const reservationInfo = prepareReservationData({ reservation, date, time })

  return (
    <Box>
      <Stack
        sx={{ gap: '5px', paddingBottom: '24px', borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
        {reservationInfo.map((item) => (
          <Stack key={item.label} direction="row" justifyContent="space-between">
            <Typography>{item.label}</Typography>
            <Typography color="secondary">{item.value}</Typography>
          </Stack>
        ))}
      </Stack>
      <Stack sx={{ flexDirection: 'row', gap: '10px', paddingTop: '24px' }}>
        <Button variant="contained" size="default" fullWidth onClick={handleOpenOrder}>
          Open order
        </Button>
        <Button variant="outlined" size="default" fullWidth onClick={handleCancelReservation}>
          Cancel reservation
        </Button>
      </Stack>
    </Box>
  )
}

export default ReservationModalContent
