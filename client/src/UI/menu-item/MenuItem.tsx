import { FC } from 'react'
import { LinkItemType } from 'types'
import { MenuItemButton, MenuItemLink, MenuItemWrapper } from './MenuItem.styled'

interface MenuProps {
  onClose: () => void
  data: LinkItemType
  typeButton?: boolean
}

const MenuItem: FC<MenuProps> = ({ data, typeButton, onClose }) => {
  const { link, title, icon } = data
  return (
    <MenuItemWrapper onClick={onClose}>
      {typeButton ? (
        <MenuItemButton>
          {!!icon && icon}
          {title}
        </MenuItemButton>
      ) : (
        <MenuItemLink to={link}>
          {!!icon && icon}
          {title}
        </MenuItemLink>
      )}
    </MenuItemWrapper>
  )
}

export default MenuItem
