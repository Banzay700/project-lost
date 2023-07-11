import { Avatar, Skeleton, Stack, Typography } from '@mui/material'
import { FC } from 'react'

const InfoDeliverySkeleton: FC = () => {
  return (
    <Stack sx={{ padding: '20px', gap: '10px' }}>
      <Stack direction="row" justifyContent="space-between">
        <Stack sx={{ gap: '5px' }} width="100%">
          <Typography variant="h1" component="p" width="40%">
            <Skeleton height="30px" />
          </Typography>
          <Typography variant="h3" component="p" width="40%">
            <Skeleton />
          </Typography>
        </Stack>
        <Skeleton width="40%" />
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Stack width="100%">
          <Typography variant="h2" component="p" fontWeight="600" color="secondary">
            Delivery Address
          </Typography>
          <Typography variant="h3" component="p" width="70%">
            <Skeleton />
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ gap: '5px' }} alignItems="center">
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default InfoDeliverySkeleton
