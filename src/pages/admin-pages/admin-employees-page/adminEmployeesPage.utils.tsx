import { SidebarTabItemType } from 'types/ComponentsItemType'
import { IconRegistrationUser, IconUser } from 'assets/icons'

export const ROUTES_EMPLOYEES = {
  EMPLOYEES: 'employees',
  REGISTRATION: 'registration',
}

export const adminEmployeesPageTabs: SidebarTabItemType[] = [
  {
    linkTo: ROUTES_EMPLOYEES.EMPLOYEES,
    icon: <IconUser />,
    label: 'Employees',
  },
  {
    linkTo: ROUTES_EMPLOYEES.REGISTRATION,
    icon: <IconRegistrationUser />,
    label: 'Registration',
  },
]
