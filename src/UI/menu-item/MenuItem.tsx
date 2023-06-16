import { FC } from 'react'
import { LinkItemType } from 'types'
import { MenuItemLink, MenuItemWrapper } from './MenuItem.styled'

interface MenuProps {
  onClose: () => void
  data: LinkItemType
}

const MenuItem: FC<MenuProps> = ({ data, onClose }) => {
  const { link, title, icon } = data
  return (
    <MenuItemWrapper onClick={onClose}>
      <MenuItemLink to={link}>
        {!!icon && icon}
        {title}
      </MenuItemLink>
    </MenuItemWrapper>
  )
}

export default MenuItem
