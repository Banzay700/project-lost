import { FC, ReactNode } from 'react'
import { SidebarTabItemType } from 'types'
import { Typography } from '@mui/material'
import { SidebarTabItem } from './sidebar-tab-item'
import { SidebarSubheaderWrapper, SidebarTabsListWrapper } from './SidebarTabsList.styled'

interface SidebarTabsListProps {
  sidebarTabItems: SidebarTabItemType[]
  title: string
  titleIcon?: ReactNode
}

const SidebarTabsList: FC<SidebarTabsListProps> = ({ title, titleIcon, sidebarTabItems }) => {
  return (
    <SidebarTabsListWrapper>
      <SidebarSubheaderWrapper color="primary">
        {titleIcon}
        <Typography variant="h1" component="p">
          {title}
        </Typography>
      </SidebarSubheaderWrapper>
      {sidebarTabItems.map(({ linkTo, label, icon }) => (
        <SidebarTabItem key={linkTo} linkTo={linkTo} label={label} icon={icon} />
      ))}
    </SidebarTabsListWrapper>
  )
}

export default SidebarTabsList
