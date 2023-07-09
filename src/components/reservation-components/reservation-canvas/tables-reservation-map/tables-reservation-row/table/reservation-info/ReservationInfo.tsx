import { FC, SyntheticEvent, useState } from 'react'

import { Icon } from 'assets/index'
import { ReservationCanvasType } from 'types/index'
import { ReservationInfoModal } from 'components/modal-components'
import { IconWrapper } from './ReservationInfo.styled'

interface ReservationInfoProps {
  info?: ReservationCanvasType
}

const ReservationInfo: FC<ReservationInfoProps> = ({ info }) => {
  const [open, setOpen] = useState(false)

  const handleModalOpen = (e: SyntheticEvent) => {
    e.stopPropagation()
    setOpen(true)
  }

  const handleModalClose = () => setOpen(false)

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
