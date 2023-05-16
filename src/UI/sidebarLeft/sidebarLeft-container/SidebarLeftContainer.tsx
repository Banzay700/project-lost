import { FC, ReactNode } from 'react'
import cn from 'classnames'
import { List } from '@mui/material'
import s from './SidebarLeftContainer.module.scss'

interface SidebarLeftContainerProps {
  children: ReactNode
  className?: string
}

const SidebarLeftContainer: FC<SidebarLeftContainerProps> = ({ children, className }) => {
  return <List className={cn(s.list, className)}>{children}</List>
}

export default SidebarLeftContainer
