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
  const { link, title, icon } = data
  return (
    <MenuItemMui onClick={onClose} sx={{ minWidth: '200px', p: 0 }}>
      <Link
        className={className}
        to={link}
        style={{
          width: '100%',
          padding: '6px 10px',
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
        }}>
        {!!icon && icon}
        {title}
      </Link>
    </MenuItemMui>
  )
}

export default MenuItem
