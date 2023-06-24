import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { LinkItemType } from 'types'
import { CustomNavLink } from 'UI'

interface NavbarProps {
  data: LinkItemType
  variant?: 'h1' | 'h2' | 'h3' | 'subtitle1' | 'subtitle2' | 'caption' | 'dashNumb'
  fontWeight?: 400 | 500 | 600 | 700
  variantStyle?: 'button'
}

const NavItem: FC<NavbarProps> = (props) => {
  const { data, variant, fontWeight, variantStyle } = props
  const { icon, title, link } = data
  return (
    <CustomNavLink linkTo={link} variant={variantStyle}>
      {icon && !variantStyle && icon}
      {!!title && (
        <Typography variant={variant || 'h2'} fontWeight={fontWeight || 500}>
          {title}
        </Typography>
      )}
    </CustomNavLink>
  )
}

export default NavItem
