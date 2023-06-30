import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { GoogleMap } from 'components'
import { Modal } from 'UI'
import { useIsModal } from 'hooks'
import { MAP_ACTIONS_MODAL_ADDRESS } from 'utils'

interface ModalAddressInfoProps {
  address: string
  lat: number
  lng: number
}

const ModalAddressInfo: FC<ModalAddressInfoProps> = ({ address, lat, lng }) => {
  const { isOpen, handleToggleIsOpenModal } = useIsModal()

  return (
    <Modal
      title="Address Info"
      isOpen={isOpen}
      onClose={handleToggleIsOpenModal}
      isIconExit
      hiddenActions>
      <Stack spacing={4}>
        <Typography>Address: {address || 'None'} </Typography>
        <Typography>Map: </Typography>
        <Box sx={{ height: '200px', width: '100%' }}>
          <GoogleMap
            lat={lat}
            lng={lng}
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
