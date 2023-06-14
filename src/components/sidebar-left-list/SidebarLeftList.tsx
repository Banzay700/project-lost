import { FC } from 'react'
import { List } from '@mui/material'
import { SidebarItemType } from 'types'
import { SidebarLinkItem, SidebarLinkListSkeleton } from 'UI'
import { correctionName, FadeIn } from 'utils'
import { useRootLocationPath } from 'hooks/useRootLocationPath.hook'
import { useSmoothScrollbar } from 'hooks/useSmoothScrollbar.hook'
import s from './SidebarLeftList.module.scss'

interface SidebarLeftListProps {
  sidebarItems?: SidebarItemType[]
  background?: string
  isLoading?: boolean
}

const SidebarLeftList: FC<SidebarLeftListProps> = ({ sidebarItems, background, isLoading }) => {
  const { location } = useRootLocationPath()
  const containerRef = useSmoothScrollbar<HTMLUListElement>('2px')

  if (isLoading) {
    return <SidebarLinkListSkeleton className={s.list} />
  }

  return (
    <List className={s.list} sx={{ background }} ref={containerRef}>
      {sidebarItems?.map(({ title, id, picture, icon }) => (
        <SidebarLinkItem
          key={id}
          label={correctionName(title)}
          linkIconSVG={picture}
          linkTo={`/${location}/${title.toLowerCase()}`}>
          {icon}
        </SidebarLinkItem>
      ))}
    </List>
  )
}

export default SidebarLeftList
