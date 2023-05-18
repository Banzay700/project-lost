import { NavType } from 'types/NavType'
import { IconHome, IconNote, IconClock, IconReceipt } from 'assets'

export const navData: NavType[] = [
  {
    link: '/home',
    text: 'Home',
    icon: <IconHome style={{ marginRight: '11px' }} />,
  },
  {
    link: '/order',
    text: 'Order',
    icon: <IconReceipt style={{ marginRight: '11px' }} />,
  },
  {
    link: '/history',
    text: 'History',
    icon: <IconNote style={{ marginRight: '11px' }} />,
  },
  {
    link: '/bills',
    text: 'Bills',
    icon: <IconClock style={{ marginRight: '11px' }} />,
  },
]

export const menuData: NavType[] = [
  {
    link: '/login',
    text: 'Log out',
  },
  {
    link: '/settings',
    text: 'Settings',
  },
]
