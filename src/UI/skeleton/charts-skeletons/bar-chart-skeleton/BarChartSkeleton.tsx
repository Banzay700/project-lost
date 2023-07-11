import { FC } from 'react'
import { Skeleton } from '@mui/material'

import { BarChartSkeletonWrapper } from './BarChartSkeleton.styled'
import { ChartBarItems } from './chart-bar-items'

interface BarChartSkeletonProps {
  barItemsColor: string
}

const BarChartSkeleton: FC<BarChartSkeletonProps> = ({ barItemsColor }) => {
  return (
    <BarChartSkeletonWrapper>
      <Skeleton height="27px" width="30%" sx={{ alignSelf: 'center' }} />
      <ChartBarItems color={barItemsColor} />
      <Skeleton height="20px" width="93%" />
    </BarChartSkeletonWrapper>
  )
}

export default BarChartSkeleton
