import { FC, ReactNode } from 'react'
import { ListItem, ListItemText } from '@mui/material'
import cn from 'classnames'
import s from './SidebarLeftItem.module.scss'

interface SidebarLeftItemProps {
  className?: string
  children?: ReactNode
  label?: string
}

const SidebarLeftItem: FC<SidebarLeftItemProps> = ({ children, className, label }) => {
  return (
    <ListItem className={cn(s.item, className)}>
      {children}
      <ListItemText primary={label} className={s.text} />
    </ListItem>
  )
}

export default SidebarLeftItem
