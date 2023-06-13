import { FC, SyntheticEvent, useState } from 'react'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { ModalContentPopup } from 'UI'
import { ROUTES } from 'routes'
import { ReservationCanvasType } from 'types'
import { useLazyGetTablesCanvasQuery, useUpdateReservationMutation } from 'store/api'
import { convertToDate, prepareReservationData } from './reservationModalContent.utils'
import { ReservationModalInfo } from './reservation-modal-info'

interface ReservationModalContentProps {
  reservation: ReservationCanvasType
  onCloseModal: () => void
}

const ReservationModalContent: FC<ReservationModalContentProps> = (props) => {
  const { reservation, onCloseModal } = props
  const [popup, setPopup] = useState(false)
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

  const handleTogglePopup = () => setPopup(!popup)

  const reservationInfo = prepareReservationData({ reservation, date, time })

  return (
    <Box>
      {popup ? (
        <ModalContentPopup
          message="You really want to cancel this reservation?"
          handleConfirm={handleCancelReservation}
          handleReject={handleTogglePopup}
        />
      ) : (
        <ReservationModalInfo
          info={reservationInfo}
          handleOpenOrder={handleOpenOrder}
          handleShowPopup={handleTogglePopup}
        />
      )}
    </Box>
  )
}

export default ReservationModalContent
