import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { LinkItemType } from 'types'
import { CustomNavLink } from 'UI'
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
    <CustomNavLink linkTo={link}>
      {!!icon && icon}
      {!!title && (
        <Typography variant={variant || 'h2'} fontWeight={fontWeight || 500}>
          {title}
        </Typography>
      )}
    </CustomNavLink>
  )
}

export default NavItem
