import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Typography } from '@mui/material'
import cn from 'classnames'
import { LinkType } from 'types'
import s from './NavItem.module.scss'

interface NavbarProps {
  data: LinkType
  active: string
  className: string
  variant?: 'h1' | 'h2' | 'h3' | 'subtitle1' | 'subtitle2' | 'caption' | 'dashNumb'
  fontWeight?: 400 | 500 | 600 | 700
}

const NavItem: FC<NavbarProps> = (props) => {
  const { data, active, className, variant, fontWeight } = props
  const { icon, text, link } = data
  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? cn(s[className], s[active]) : s[className])}>
      {!!icon && icon}
      {!!text && (
        <Typography variant={variant || 'h2'} fontWeight={fontWeight || 500}>
          {text}
        </Typography>
      )}
    </NavLink>
  )
}

export default NavItem
