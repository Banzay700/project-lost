import { FC, ReactNode } from 'react'
import { SidebarTabItemType } from 'types'
import { List, ListSubheader, Typography } from '@mui/material'
import { SidebarTabItem } from './sidebar-tab-item'

interface SidebarTabsListProps {
  sidebarTabItems: SidebarTabItemType[]
  title: string
  titleIcon?: ReactNode
}

const SidebarTabsList: FC<SidebarTabsListProps> = ({ title, titleIcon, sidebarTabItems }) => {
  return (
    <List
      sx={{
        width: '300px',
        minWidth: '300px',
        p: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        borderRight: '1px solid #e4e4e4',
      }}>
      <ListSubheader
        color="primary"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          p: '17.5px 18px',
          borderBottom: '1px solid #e4e4e4',
        }}>
        {titleIcon}
        <Typography variant="h1" component="p">
          {title}
        </Typography>
      </ListSubheader>
      {sidebarTabItems.map(({ linkTo, label, icon }) => (
        <SidebarTabItem key={linkTo} linkTo={linkTo} label={label} icon={icon} />
      ))}
    </List>
  )
}

export default SidebarTabsList
