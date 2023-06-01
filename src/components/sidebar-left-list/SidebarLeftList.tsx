import { FC } from 'react'
import { List } from '@mui/material'
import { SidebarItemType } from 'types'
import { SidebarLinkItem } from 'UI'
import { correctionName } from 'utils'
import { useRootLocationPath } from 'hooks/useRootLocationPath.hook'
import s from './SidebarLeftList.module.scss'

interface SidebarLeftListProps {
  sidebarItems: SidebarItemType[]
  background?: string
}

const SidebarLeftList: FC<SidebarLeftListProps> = ({ sidebarItems, background }) => {
  const rootLocationPath = useRootLocationPath()
  return (
    <List className={s.list} sx={{ background }}>
      {sidebarItems.map(({ title, id, picture, icon }) => (
        <SidebarLinkItem
          key={id}
          label={correctionName(title)}
          linkIconSVG={picture}
          linkTo={`/${rootLocationPath}/${title.toLowerCase()}`}
          className={s.listItem}>
          {icon}
        </SidebarLinkItem>
      ))}
    </List>
  )
}

export default SidebarLeftList
