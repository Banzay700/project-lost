import { FC } from 'react'
import { Link } from 'react-router-dom'
import { MenuItem as MenuItemMui } from '@mui/material'
import { NavType } from 'types'
import s from './MenuItem.module.scss'

interface MenuProps {
  onClose: () => void
  className: string
  data: NavType
}

const MenuItem: FC<MenuProps> = ({ onClose, className, data }) => {
  const { link, text, icon } = data
  return (
    <MenuItemMui onClick={onClose}>
      <Link className={s[className]} to={link}>
        {!!icon && icon}
        {text}
      </Link>
    </MenuItemMui>
  )
}

export default MenuItem
