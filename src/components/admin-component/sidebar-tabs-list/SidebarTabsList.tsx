import { FC } from 'react'
import { SidebarTabItemType } from 'types'
import { List } from '@mui/material'
import { SidebarTabItem } from './sidebar-tab-item'

interface SidebarTabsListProps {
  sidebarTabItems: SidebarTabItemType[]
}

const SidebarTabsList: FC<SidebarTabsListProps> = ({ sidebarTabItems }) => {
  return (
    <List
      sx={{
        p: '24px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        borderRight: '1px solid #e4e4e4',
      }}>
      {sidebarTabItems.map(({ linkTo, label, icon }) => (
        <SidebarTabItem key={linkTo} linkTo={linkTo} label={label} icon={icon} />
      ))}
    </List>
  )
}

export default SidebarTabsList
