import { FC } from 'react'
import { List } from '@mui/material'
import { SidebarItemsType } from 'types'
import { SidebarLinkItem } from 'UI'
import s from './SidebarLeftList.module.scss'

interface SidebarLeftListProps {
  sidebarItems: SidebarItemsType[]
}

const SidebarLeftList: FC<SidebarLeftListProps> = ({ sidebarItems }) => {
  return (
    <List className={s.list}>
      {sidebarItems.map(({ label, icon, linkTo }) => (
        <SidebarLinkItem
          key={label}
          label={label}
          icon={icon}
          linkTo={linkTo}
          className={s.listItem}
        />
      ))}
    </List>
  )
}

export default SidebarLeftList
