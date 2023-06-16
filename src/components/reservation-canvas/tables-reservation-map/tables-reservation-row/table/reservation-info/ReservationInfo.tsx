import { FC, SyntheticEvent, useState } from 'react'
import { Box } from '@mui/material'

import { Icon } from 'assets'
import { ReservationCanvasType } from 'types'
import { ReservationInfoModal } from 'components/modal-components'
import { IconWrapper } from 'components/reservation-canvas/tables-reservation-map/tables-reservation-row/table/reservation-info/ReservationInfo.styled'

interface ReservationInfoProps {
  info?: ReservationCanvasType
}

const ReservationInfo: FC<ReservationInfoProps> = ({ info }) => {
  const [open, setOpen] = useState(false)

  const handleModalOpen = (e: SyntheticEvent) => {
    e.stopPropagation()
    setOpen(true)
  }

  const handleModalClose = () => {
    setOpen(false)
  }

  return info ? (
    <>
      <IconWrapper info={info} onClick={handleModalOpen}>
        <Icon.Info />
      </IconWrapper>
      <ReservationInfoModal isOpen={open} handleClose={handleModalClose} reservation={info} />
    </>
  ) : null
}

export default ReservationInfo
