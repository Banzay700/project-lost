import { FC, SyntheticEvent } from 'react'
import { Typography } from '@mui/material'

import { FadeIn } from 'utils'
import { IconCheck, IconContainer, IconCross, IconWrapper } from './ModalContentPopup.styled'

interface ModalContentPopupProps {
  message: string
  handleConfirm: (e: SyntheticEvent) => void
  handleReject: () => void
}

const ModalContentPopup: FC<ModalContentPopupProps> = (props) => {
  const { message, handleConfirm, handleReject } = props
  return (
    <FadeIn styles={{ paddingBottom: '24px' }}>
      <Typography sx={{ paddingTop: '35px' }} align="center">
        {message}
      </Typography>
      <IconWrapper>
        <IconContainer onClick={handleConfirm}>
          <IconCheck />
        </IconContainer>
        <IconContainer>
          <IconCross onClick={handleReject} />
        </IconContainer>
      </IconWrapper>
    </FadeIn>
  )
}

export default ModalContentPopup
