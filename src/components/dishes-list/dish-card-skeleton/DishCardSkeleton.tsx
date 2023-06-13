import { FC } from 'react'
import { Card, Skeleton, Stack, Typography } from '@mui/material'

const DishCardSkeleton: FC = () => {
  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: '220px',
        minWidth: '190px',
        height: '100%',
        borderRadius: '16px',
        p: '12px',
      }}>
      <Stack spacing="12px" height="100%">
        <Skeleton
          animation="wave"
          height="158px"
          sx={{
            borderRadius: '12px',
            minHeight: '158px',
            maxHeight: '158px',
            flex: 1,
            transform: 'none',
          }}
        />
        <Stack
          spacing="8px"
          sx={{ transition: '1s', height: '100%', justifyContent: 'space-between' }}>
          <Typography component="p" width="70%">
            <Skeleton />
          </Typography>
          <Typography component="p" width="30%">
            <Skeleton />
          </Typography>
          <Typography component="p" width="30%">
            <Skeleton />
          </Typography>
        </Stack>
      </Stack>
    </Card>
  )
}

export default DishCardSkeleton
