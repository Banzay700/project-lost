import { FC } from 'react'
import { SidebarTabItemType } from 'types/ComponentsItemType'
import { IconRegistrationUser, IconUser } from 'assets/icons'
import { SidebarTabsList } from 'components/admin-component'

const mokEmployees: SidebarTabItemType[] = [
  {
    linkTo: 'employees',
    icon: <IconUser />,
    label: 'Employees',
  },
  {
    linkTo: 'registration-employees',
    icon: <IconRegistrationUser />,
    label: 'Registration employees',
  },
]

const AdminEmployeesPage: FC = () => {
  return <SidebarTabsList sidebarTabItems={mokEmployees} />
}

export default AdminEmployeesPage
