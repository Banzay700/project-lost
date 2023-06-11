import { FC } from 'react'
import { Icon } from 'assets'
import { Stack } from '@mui/material'

interface ModalContentPopupProps {
  message: string
  isOpen: boolean
  handleConfirm: () => void
  handleReject: () => void
}

const ModalContentPopup: FC<ModalContentPopupProps> = (props) => {
  const { message, isOpen, handleConfirm, handleReject } = props
  return isOpen ? (
    <Stack>
      <Stack onClick={handleConfirm}>
        <Icon.Check />
      </Stack>
      <Stack>
        <Icon.Check onClick={handleReject} />
      </Stack>
    </Stack>
  ) : null
}

export default ModalContentPopup
