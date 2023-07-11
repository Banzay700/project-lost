import { FC } from 'react'
import { Skeleton } from '@mui/material'

import { ChartBarItemsWrapper, SkeletonsContainer } from './ChartBarItems.styled'

interface ChartBarItemsProps {
  color: string
}

const ChartBarItems: FC<ChartBarItemsProps> = ({ color }) => {
  return (
    <ChartBarItemsWrapper>
      <Skeleton height="115%" width="10px" />
      <SkeletonsContainer>
        <Skeleton height="27%" width="100%" sx={{ bgcolor: color }} />
        <Skeleton height="34%" width="100%" sx={{ bgcolor: color }} />
        <Skeleton height="56%" width="100%" sx={{ bgcolor: color }} />
        <Skeleton height="27%" width="100%" sx={{ bgcolor: color }} />
        <Skeleton height="32%" width="100%" sx={{ bgcolor: color }} />
        <Skeleton height="87%" width="100%" sx={{ bgcolor: color }} />
        <Skeleton height="19%" width="100%" sx={{ bgcolor: color }} />
        <Skeleton height="25%" width="100%" sx={{ bgcolor: color }} />
        <Skeleton height="43%" width="100%" sx={{ bgcolor: color }} />
        <Skeleton height="27%" width="100%" sx={{ bgcolor: color }} />
        <Skeleton height="49%" width="100%" sx={{ bgcolor: color }} />
        <Skeleton height="76%" width="100%" sx={{ bgcolor: color }} />
        <Skeleton height="38%" width="100%" sx={{ bgcolor: color }} />
      </SkeletonsContainer>
    </ChartBarItemsWrapper>
  )
}

export default ChartBarItems
