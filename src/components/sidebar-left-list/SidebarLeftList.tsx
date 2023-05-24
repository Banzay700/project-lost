import { FC } from 'react'
import { List } from '@mui/material'
import { SidebarItemsType } from 'types'
import { SidebarLinkItem } from 'UI'
import s from './SidebarLeftList.module.scss'
import { correctionName } from 'utils/correctionName'

interface SidebarLeftListProps {
  sidebarItems: SidebarItemsType[]
}

const SidebarLeftList: FC<SidebarLeftListProps> = ({ sidebarItems }) => {
  return (
    <List className={s.list}>
      {sidebarItems.map(({ title, id, picture }) => (
        <SidebarLinkItem
          key={id}
          label={correctionName(title)}
          icon={picture}
          linkTo={`/home/${title.toLowerCase()}`}
          className={s.listItem}
        />
      ))}
    </List>
  )
}

export default SidebarLeftList
