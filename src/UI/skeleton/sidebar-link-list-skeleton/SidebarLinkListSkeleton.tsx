import { FC } from 'react'
import { ListItem, List, Skeleton, Theme, useMediaQuery } from '@mui/material'
import { generateArray } from 'utils/generateArray'

interface SidebarLinkItemsSkeletonProps {
  className?: string
}

const SidebarLinkListSkeleton: FC<SidebarLinkItemsSkeletonProps> = ({ className }) => {
  const isThemeLgSize = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))
  const generateArr = generateArray(6)
  return (
    <List className={className}>
      {generateArr.map((item) => (
        <ListItem
          key={item}
          sx={{
            width: '100%',
            padding: 0,
            marginBottom: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: '12px 6px',
          }}>
          <Skeleton variant="rounded" width="35px" height="35px" />
          {isThemeLgSize && <Skeleton animation="wave" width="35px" height="20px" />}
        </ListItem>
      ))}
    </List>
  )
}

export default SidebarLinkListSkeleton
