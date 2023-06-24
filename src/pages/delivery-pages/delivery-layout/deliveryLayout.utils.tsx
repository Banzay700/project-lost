import { Icon } from 'assets/index'
import { LinkItemType } from 'types/ComponentsItemType'

export const navData: LinkItemType[] = [
  {
    link: '/delivery',
    title: 'Home',
    icon: <Icon.Home style={{ marginRight: '11px' }} />,
  },
  {
    link: '/active-delivery',
    title: 'Delivery',
    icon: <Icon.Receipt style={{ marginRight: '11px' }} />,
  },

  {
    link: '/history',
    title: 'History',
    icon: <Icon.Clock style={{ marginRight: '11px' }} />,
  },
]
