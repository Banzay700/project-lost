import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { GoogleMap } from 'components'
import { Modal } from 'UI'
import { MAP_ACTIONS_MODAL_ADDRESS } from 'utils'

interface ModalAddressInfoProps {
  address: string
  lat: string
  lng: string
  isOpen: boolean
  onOpenModal: () => void
}

const ModalAddressInfo: FC<ModalAddressInfoProps> = ({
  address,
  lat,
  lng,
  isOpen,
  onOpenModal,
}) => {
  return (
    <Modal title="Address Info" isOpen={isOpen} onClose={onOpenModal} isIconExit hiddenActions>
      <Stack spacing={4}>
        <Typography>Address: {address || 'None'} </Typography>
        <Typography>Map: </Typography>
        <Box sx={{ height: '200px', width: '100%' }}>
          <GoogleMap
            lat={Number(lat)}
            lng={Number(lng)}
            hideTripSummary
            isMarker
            mapActions={MAP_ACTIONS_MODAL_ADDRESS}
          />
        </Box>
      </Stack>
    </Modal>
  )
}

export default ModalAddressInfo
