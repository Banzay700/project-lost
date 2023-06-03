import { FC, ReactNode } from 'react'
import { ListItem, Stack, Typography } from '@mui/material'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'
import s from './SidebarTabItem.module.scss'

interface SidebarTabItemProps {
  linkTo: string
  label: string
  icon?: ReactNode
}

const SidebarTabItem: FC<SidebarTabItemProps> = ({ label, icon, linkTo }) => {
  return (
    <ListItem sx={{ height: 'fit-content', p: 0 }}>
      <NavLink
        to={linkTo}
        className={({ isActive }) => (isActive ? cn(s.link, s.activeLink) : s.link)}>
        <Stack direction="row" sx={{ alignItems: 'center', gap: '12px', position: 'relative' }}>
          {icon}
          <Typography variant="h2" component="p" fontWeight={600}>
            {label}
          </Typography>
        </Stack>
      </NavLink>
    </ListItem>
  )
}

export default SidebarTabItem
