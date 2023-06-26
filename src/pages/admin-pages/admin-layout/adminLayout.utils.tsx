import { LinkItemType } from 'types'
import { Icon } from 'assets'

export const navLink: LinkItemType[] = [
  {
    link: `/home`,
    title: 'Food',
    icon: <Icon.Dishes style={{ marginRight: '11px', width: '18px', height: '18px' }} />,
  },
  {
    link: '/delivery',
    title: 'Delivery',
    icon: <Icon.Delivery style={{ marginRight: '11px', width: '18px', height: '18px' }} />,
  },
]
