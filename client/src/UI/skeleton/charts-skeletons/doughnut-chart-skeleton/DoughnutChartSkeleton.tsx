import { FC } from 'react'
import { Skeleton, Stack } from '@mui/material'

import {
  CircularDecor,
  DoughnutChartSkeletonCircular,
  DoughnutChartSkeletonContent,
  DoughnutChartSkeletonWrapper,
  SkeletonCircular,
} from './DoughnutChartSkeleton.styled'

const DoughnutChartSkeleton: FC = () => {
  return (
    <DoughnutChartSkeletonWrapper>
      <Skeleton height="27px" width="30%" sx={{ alignSelf: 'center' }} />
      <DoughnutChartSkeletonContent>
        <DoughnutChartSkeletonCircular>
          <SkeletonCircular variant="circular" />
          <CircularDecor />
        </DoughnutChartSkeletonCircular>
        <Stack
          sx={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Skeleton height="15px" width="20%" />
          <Skeleton height="15px" width="30%" />
          <Skeleton height="15px" width="18%" />
        </Stack>
      </DoughnutChartSkeletonContent>
    </DoughnutChartSkeletonWrapper>
  )
}

export default DoughnutChartSkeleton
