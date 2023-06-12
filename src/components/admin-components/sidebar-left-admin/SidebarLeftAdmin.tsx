import { FC } from 'react'
import { Icon } from 'assets'
import { SidebarItemType } from 'types'
import { SidebarLeftList } from 'components'

const mok: SidebarItemType[] = [
  { id: 'statistics', icon: <Icon.Statistics />, title: 'Statistics' },
  { id: 'restaurant', icon: <Icon.DineIn width={35} height={35} />, title: 'Restaurant' },
  { id: 'employees', icon: <Icon.Users />, title: 'Employees' },
  { id: 'settings', icon: <Icon.Setting />, title: 'Settings' },
]

const SidebarLeftAdmin: FC = () => {
  return <SidebarLeftList sidebarItems={mok} background="#19191C" />
}

export default SidebarLeftAdmin
