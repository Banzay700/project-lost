import { FC } from 'react'

import { Modal } from 'UI'
import { ReservationCanvasType } from 'types'
import { ReservationModalContent } from 'components/reservation-components/reservation-canvas'

interface ReservationInfoModalProps {
  isOpen: boolean
  handleClose: () => void
  reservation: ReservationCanvasType
}

const ReservationInfoModal: FC<ReservationInfoModalProps> = (props) => {
  const { isOpen, reservation, handleClose } = props
  return (
    <Modal isOpen={isOpen} title="Reservation Info" hiddenActions isIconExit onClose={handleClose}>
      <ReservationModalContent reservation={reservation} onCloseModal={handleClose} />
    </Modal>
  )
}

export default ReservationInfoModal
