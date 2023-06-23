import { Icon } from 'assets/index'
import { LinkItemType } from 'types/ComponentsItemType'

export const navData: LinkItemType[] = [
  {
    link: '/delivery/home',
    title: 'Home',
    icon: <Icon.Home style={{ marginRight: '11px' }} />,
  },
  {
    link: '/delivery/orders',
    title: 'Orders',
    icon: <Icon.Receipt style={{ marginRight: '11px' }} />,
  },

  {
    link: '/delivery/history',
    title: 'History',
    icon: <Icon.Clock style={{ marginRight: '11px' }} />,
  },
]
