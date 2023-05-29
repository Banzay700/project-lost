import { LinkItemType } from 'types/ComponentsItemType/LinkItemType'
import { IconHome, IconNote, IconClock, IconReceipt } from 'assets'

export const navData: LinkItemType[] = [
  {
    link: '/home',
    text: 'Home',
    icon: <IconHome style={{ marginRight: '11px' }} />,
  },
  {
    link: '/orders',
    text: 'Orders',
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

// TODO: delete this mock
export const mockUser = {
  name: 'John Doe',
  surname: 'Doe',
}
