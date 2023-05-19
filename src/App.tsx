import { SidebarLeftList } from 'components'
import { SidebarItemsType } from 'types/SidebarItemsType'
import { TestIcon } from 'assets/icons'

const mok: SidebarItemsType[] = [
  {
    label: 'test',
    linkTo: 'test',
    icon: <TestIcon />,
  },
]

const App = () => {
  return <SidebarLeftList sidebarItems={mok} />
}

export default App
