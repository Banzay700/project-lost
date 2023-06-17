import { FC } from 'react'
import { Typography, Stack, Box } from '@mui/material'

import { Icon } from 'assets'
import { ReservationInfoResponseType } from 'types/ReservationsTypes'

interface InfoItemProps {
  data: ReservationInfoResponseType
}

const InfoItem: FC<InfoItemProps> = ({ data }) => {
  return (
    <>
      <Typography>{data.message}</Typography>
      <Stack spacing={2} sx={{ marginTop: '10px' }}>
        {data.reservationsTime &&
          data.reservationsTime.map((time: string) => (
            <Box key={time} sx={{ display: 'flex' }}>
              <Icon.Oval />
              <Typography>{time}</Typography>
            </Box>
          ))}
      </Stack>
    </>
  )
}

export default InfoItem
