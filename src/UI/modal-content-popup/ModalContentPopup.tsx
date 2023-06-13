import { FC, SyntheticEvent } from 'react'
import { Stack, Typography } from '@mui/material'

import { Icon } from 'assets'
import { FadeIn } from 'utils'

interface ModalContentPopupProps {
  message: string
  handleConfirm: (e: SyntheticEvent) => void
  handleReject: () => void
}

const iconWrapperStyle = {
  cursor: 'pointer',
  transition: 'color 0.2s ease-in-out',
  '&:hover': { color: '#FF5C00' },
}

const iconStyle = { width: '35px', height: '35px' }

const ModalContentPopup: FC<ModalContentPopupProps> = (props) => {
  const { message, handleConfirm, handleReject } = props
  return (
    <FadeIn styles={{ paddingBottom: '24px' }}>
      <Typography sx={{ paddingTop: '35px' }} align="center">
        {message}
      </Typography>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: '60px 0 ',
          borderBottom: '1px solid #0000001f',
        }}>
        <Stack sx={iconWrapperStyle} onClick={handleConfirm}>
          <Icon.Check style={iconStyle} />
        </Stack>
        <Stack sx={iconWrapperStyle}>
          <Icon.Cross style={iconStyle} onClick={handleReject} />
        </Stack>
      </Stack>
    </FadeIn>
  )
}

export default ModalContentPopup
