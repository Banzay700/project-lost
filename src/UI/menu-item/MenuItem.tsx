import { FC } from 'react'
import { Link } from 'react-router-dom'
import { MenuItem as MenuItemMui } from '@mui/material'
import { LinkItemType } from 'types'

interface MenuProps {
  onClose: () => void
  className?: string
  data: LinkItemType
}

const MenuItem: FC<MenuProps> = ({ data, className, onClose }) => {
  const { link, text, icon } = data
  return (
    <MenuItemMui onClick={onClose}>
      <Link className={className} to={link}>
        {!!icon && icon}
        {text}
      </Link>
    </MenuItemMui>
  )
}

export default MenuItem
