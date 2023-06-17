import { FC } from 'react'
import { SidebarItemType } from 'types'
import { SidebarLinkItem, SidebarLinkListSkeleton } from 'UI'
import { correctionName } from 'utils'
import { useRootLocationPath, useSmoothScrollbar } from 'hooks'
import { SidebarWrapper } from './SidebarLeftList.styled'

interface SidebarLeftListProps {
  sidebarItems?: SidebarItemType[]
  isLoading?: boolean
}

const SidebarLeftList: FC<SidebarLeftListProps> = ({ sidebarItems, isLoading }) => {
  const { location, pathname } = useRootLocationPath()
  const containerRef = useSmoothScrollbar<HTMLDivElement>('2px')

  const pathSplit = pathname.split('/')
  const registeredLinkTo = pathSplit.slice(0, pathSplit.length - 1).join('/')

  return (
    <div ref={containerRef} style={{ height: '100%' }}>
      <SidebarWrapper>
        {isLoading && <SidebarLinkListSkeleton />}
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
      </SidebarWrapper>
    </div>
  )
}

export default SidebarLeftList
