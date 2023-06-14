import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Typography } from '@mui/material'
import cn from 'classnames'
import { LinkItemType } from 'types/index'
import s from './NavItem.module.scss'

interface NavbarProps {
  data: LinkItemType
  active: 'activeLink' | string
  className: 'navItem' | string
  variant?: 'h1' | 'h2' | 'h3' | 'subtitle1' | 'subtitle2' | 'caption' | 'dashNumb'
  fontWeight?: 400 | 500 | 600 | 700
}

const NavItem: FC<NavbarProps> = (props) => {
  const { data, active, className, variant, fontWeight } = props
  const { icon, title, link } = data
  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? cn(s[className], s[active]) : s[className])}>
      {!!icon && icon}
      {!!title && (
        <Typography variant={variant || 'h2'} fontWeight={fontWeight || 500}>
          {title}
        </Typography>
      )}
    </NavLink>
  )
}

export default NavItem
