import { Icon } from 'assets'
import { SidebarItemType } from 'types'

export const sidebarLeftAdminMenu: SidebarItemType[] = [
  {
    id: 'statistics',
    icon: <Icon.Statistics />,
    title: 'Statistics',
  },
  { id: 'restaurant', icon: <Icon.DineIn width={35} height={35} />, title: 'Restaurant' },
  { id: 'employees', icon: <Icon.Users />, title: 'Employees' },
]
