import { FC } from 'react'
import { Skeleton } from '@mui/material'

import { LabelItemContainer } from 'pages/admin-pages'
import {
  BottomGroupWrapper,
  HeadersWrapper,
  SkeletonContentContainer,
} from './StatisticLabelsSkeleton.styled'

const StatisticLabelsSkeleton: FC = () => {
  return (
    <LabelItemContainer>
      <SkeletonContentContainer>
        <HeadersWrapper>
          <Skeleton height="27px" width="55%" animation="wave" />
          <Skeleton
            height="27px"
            width="25%"
            animation="wave"
            sx={{ bgcolor: 'primary.extraLight', borderRadius: '14px' }}
          />
        </HeadersWrapper>
        <Skeleton height="35px" width="20%" animation="wave" sx={{ marginBottom: '6px' }} />
        <BottomGroupWrapper>
          <Skeleton height="36px" width="24px" animation="wave" />
          <Skeleton width="16px" animation="wave" />
          <Skeleton width="60%" animation="wave" />
        </BottomGroupWrapper>
      </SkeletonContentContainer>
    </LabelItemContainer>
  )
}

export default StatisticLabelsSkeleton
