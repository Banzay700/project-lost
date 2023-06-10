import { FC } from 'react'

import { Typography, Stack, Box } from '@mui/material'
import { Icon } from 'assets'

interface InfoItemProps {
  data: { message: string; tableReservations: string[] }
}

const InfoItem: FC<InfoItemProps> = ({ data }) => {
  return (
    <div>
      <Typography>{data.message}</Typography>
      <Stack spacing={2} sx={{ marginTop: '10px' }}>
        {data.tableReservations &&
          data.tableReservations.map((time: string) => (
            <Box key={time} sx={{ display: 'flex' }}>
              <Icon.Oval />
              <Typography>{time}</Typography>
            </Box>
          ))}
      </Stack>
    </div>
  )
}

export default InfoItem
