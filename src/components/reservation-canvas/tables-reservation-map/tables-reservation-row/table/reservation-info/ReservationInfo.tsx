import { FC, SyntheticEvent, useState } from 'react'
import { Box } from '@mui/material'

import { Icon } from 'assets'
import { ReservationCanvasType } from 'types'
import { ReservationInfoModal } from 'components/modal-components'

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

  const iconWrapperStyles = {
    position: 'absolute',
    top: '5px',
    right: '8px',
    color: '#ff7c33',
    '&:hover': { color: '#FF5C00' },
  }

  return info ? (
    <>
      <Box sx={iconWrapperStyles} onClick={handleModalOpen}>
        <Icon.Info />
      </Box>
      <ReservationInfoModal isOpen={open} handleClose={handleModalClose} reservation={info} />
    </>
  ) : null
}

export default ReservationInfo
