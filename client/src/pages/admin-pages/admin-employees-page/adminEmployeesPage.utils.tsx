import { Icon } from 'assets'
import { SidebarTabItemType } from 'types'

export const ROUTES_EMPLOYEES = {
  EMPLOYEES: 'employees',
  REGISTRATION: 'registration',
}

export const adminEmployeesPageTabs: SidebarTabItemType[] = [
  {
    linkTo: ROUTES_EMPLOYEES.EMPLOYEES,
    icon: <Icon.User />,
    label: 'Employees',
  },
  {
    linkTo: ROUTES_EMPLOYEES.REGISTRATION,
    icon: <Icon.RegistrationUser />,
    label: 'Registration',
  },
]
