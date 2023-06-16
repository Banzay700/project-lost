import { FC } from 'react'
import { Skeleton, Theme, useMediaQuery } from '@mui/material'
import { generateArray } from 'utils/generateArray'
import {
  SidebarLinkListSkeletonWrapper,
  SidebarListWrapper,
} from './SidebarLinkListSkeleton.styled'

const SidebarLinkListSkeleton: FC = () => {
  const isThemeLgSize = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))
  const generateArr = generateArray(6)
  return (
    <SidebarListWrapper>
      {generateArr.map((item) => (
        <SidebarLinkListSkeletonWrapper key={item}>
          <Skeleton variant="rounded" width="35px" height="35px" />
          {isThemeLgSize && <Skeleton animation="wave" width="35px" height="20px" />}
        </SidebarLinkListSkeletonWrapper>
      ))}
    </SidebarListWrapper>
  )
}

export default SidebarLinkListSkeleton
