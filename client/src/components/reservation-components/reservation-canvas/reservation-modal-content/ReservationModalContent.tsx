import { FC, SyntheticEvent, useState } from 'react'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { ModalContentPopup } from 'UI/index'
import { ROUTES_WAITER } from 'routes/index'
import { ReservationCanvasType } from 'types/index'
import { useLazyGetTablesCanvasQuery, useUpdateReservationMutation } from 'store/api'
import { prepareReservationData } from './reservationModalContent.utils'
import { ReservationModalInfo } from './reservation-modal-info'

interface ReservationModalContentProps {
  reservation: ReservationCanvasType
  onCloseModal: () => void
}

const ReservationModalContent: FC<ReservationModalContentProps> = (props) => {
  const { reservation, onCloseModal } = props
  const [popup, setPopup] = useState(false)
  const navigate = useNavigate()
  const [updateReservation] = useUpdateReservationMutation()
  const [getTableCanvasDataTrigger] = useLazyGetTablesCanvasQuery()

  const handleOpenOrder = () => {
    updateReservation({ ...reservation, status: 'done' })
    navigate(`/${ROUTES_WAITER.DISHES}`)
  }

  const handleCancelReservation = (e: SyntheticEvent) => {
    e.stopPropagation()
    updateReservation({ ...reservation, status: 'cancelled' })
    getTableCanvasDataTrigger()
    onCloseModal()
  }

  const handleTogglePopup = () => setPopup(!popup)

  const reservationInfo = prepareReservationData(reservation)

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
