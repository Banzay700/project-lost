import { LinkItemType } from 'types'
import { Icon } from 'assets'

export const navData: LinkItemType[] = [
  {
    link: '/home',
    text: 'Home',
    icon: <Icon.Home style={{ marginRight: '11px' }} />,
  },
  {
    link: '/orders',
    text: 'Orders',
    icon: <Icon.Receipt style={{ marginRight: '11px' }} />,
  },

  {
    link: '/bills',
    text: 'Bills',
    icon: <Icon.Clock style={{ marginRight: '11px' }} />,
  },
  {
    link: '/reservation',
    text: 'Reservation',
    icon: <Icon.Reservation style={{ marginRight: '11px' }} />,
  },
  // {
  //   link: '/history',
  //   text: 'History',
  //   icon: <Icon.Note style={{ marginRight: '11px' }} />,
  // },
]
