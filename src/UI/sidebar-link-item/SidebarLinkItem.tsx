import { FC, isValidElement, ReactNode } from 'react'
import { ListItem, Typography } from '@mui/material'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'
import s from './SidebarLinkItem.module.scss'

interface SidebarLeftItemProps {
  label: string
  linkTo: string
  icon?: string | ReactNode
  className?: string
}
const SidebarLinkItem: FC<SidebarLeftItemProps> = ({ label, linkTo, icon, className }) => {
  let imgComponent

  if (isValidElement(icon)) {
    imgComponent = icon
  } else {
    imgComponent = <img src={icon as string} alt={label} className={s.img} />
  }

  return (
    <ListItem className={cn(s.item, className)}>
      <NavLink
        to={linkTo}
        className={({ isActive }) => (isActive ? cn(s.link, s.activeLink) : s.link)}>
        {imgComponent}
        <Typography variant="subtitle1" component="p">
          {label}
        </Typography>
      </NavLink>
    </ListItem>
  )
}

export default SidebarLinkItem
