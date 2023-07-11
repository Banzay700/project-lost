import { LinkItemType } from 'types'
import { Icon } from 'assets'

export const navData: LinkItemType[] = [
  {
    link: '/home',
    title: 'Home',
    icon: <Icon.Home style={{ marginRight: '11px' }} />,
  },
  {
    link: '/orders',
    title: 'Orders',
    icon: <Icon.Receipt style={{ marginRight: '11px' }} />,
  },

  {
    link: '/bills',
    title: 'Bills',
    icon: <Icon.Clock style={{ marginRight: '11px' }} />,
  },
  {
    link: '/reservation',
    title: 'Reservation',
    icon: <Icon.Reservation style={{ marginRight: '11px' }} />,
  },
]
