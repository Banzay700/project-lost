import { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import { Button } from 'UI'
import { FilterMenuItemType } from 'types'
import { FadeIn } from 'utils'

interface ReservationModalInfoProps {
  info: FilterMenuItemType[]
  handleOpenOrder: () => void
  handleShowPopup: () => void
}

const ReservationModalInfo: FC<ReservationModalInfoProps> = (props) => {
  const { info, handleOpenOrder, handleShowPopup } = props

  return (
    <FadeIn>
      <Stack sx={{ gap: '5px', paddingBottom: '24px', borderBottom: '1px solid #0000001f' }}>
        {info.map((item) => (
          <Stack key={item.label} direction="row" justifyContent="space-between">
            <Typography>{item.label}</Typography>
            <Typography color="secondary">{item.value}</Typography>
          </Stack>
        ))}
      </Stack>
      <Stack sx={{ flexDirection: 'row', gap: '10px', paddingTop: '24px' }}>
        <Button variant="contained" size="medium" fullWidth onClick={handleOpenOrder}>
          Open order
        </Button>
        <Button variant="outlined" size="medium" fullWidth onClick={handleShowPopup}>
          Cancel reservation
        </Button>
      </Stack>
    </FadeIn>
  )
}

export default ReservationModalInfo
