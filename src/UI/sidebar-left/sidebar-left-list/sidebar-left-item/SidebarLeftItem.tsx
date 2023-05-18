import { FC, ReactNode } from 'react'
import { ListItem, ListItemText } from '@mui/material'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'
import s from './SidebarLeftItem.module.scss'

interface SidebarLeftItemProps {
  className?: string
  children?: ReactNode
  label?: string
}

const SidebarLeftItem: FC<SidebarLeftItemProps> = ({ children, className, label }) => {
  return (
    <ListItem className={cn(s.item, className)}>
      <NavLink to={label || '/'} className={({ isActive }) => (isActive ? cn(s.activeLink) : '')}>
        {children}
        <ListItemText primary={label} className={s.text} />
      </NavLink>
    </ListItem>
  )
}

export default SidebarLeftItem
