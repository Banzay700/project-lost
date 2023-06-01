import { FC } from 'react'
import { IconDishes, IconSetting, IconStatistics, IconUsers } from 'assets'
import { SidebarItemType } from 'types'
import { SidebarLeftList } from 'components'

const mok: SidebarItemType[] = [
  { id: 'statistics', icon: <IconStatistics />, title: 'Statistics' },
  { id: 'dishes', icon: <IconDishes />, title: 'Dishes' },
  { id: 'employees', icon: <IconUsers />, title: 'Employees' },
  { id: 'settings', icon: <IconSetting />, title: 'Settings' },
]

const SidebarLeftAdmin: FC = () => {
  return <SidebarLeftList sidebarItems={mok} background="#19191C" />
}

export default SidebarLeftAdmin
