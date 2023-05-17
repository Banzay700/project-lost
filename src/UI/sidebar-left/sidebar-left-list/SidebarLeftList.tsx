import { FC, ReactNode } from 'react'
import cn from 'classnames'
import { List } from '@mui/material'
import s from './SidebarLeftList.module.scss'

interface SidebarLeftListProps {
  children: ReactNode
  className?: string
}

const SidebarLeftList: FC<SidebarLeftListProps> = ({ children, className }) => {
  return <List className={cn(s.list, className)}>{children}</List>
}

export default SidebarLeftList
