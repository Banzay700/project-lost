import { FC } from 'react'
import { List } from '@mui/material'
import { SidebarItemType } from 'types'
import { SidebarLinkItem, SidebarLinkListSkeleton } from 'UI'
import { correctionName } from 'utils'
import { useRootLocationPath, useSmoothScrollbar } from 'hooks'
import s from './SidebarLeftList.module.scss'

interface SidebarLeftListProps {
  sidebarItems?: SidebarItemType[]
  background?: string
  isLoading?: boolean
}

const SidebarLeftList: FC<SidebarLeftListProps> = ({ sidebarItems, background, isLoading }) => {
  const { location, pathname } = useRootLocationPath()
  const containerRef = useSmoothScrollbar<HTMLUListElement>('2px')

  if (isLoading) {
    return <SidebarLinkListSkeleton />
  }

  const pathSplit = pathname.split('/')
  const registeredLinkTo = pathSplit.slice(0, pathSplit.length - 1).join('/')

  return (
    <List className={s.list} sx={{ background }} ref={containerRef}>
      {sidebarItems?.map(({ title, id, picture, icon }) => (
        <SidebarLinkItem
          registeredLinkTo={registeredLinkTo}
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
