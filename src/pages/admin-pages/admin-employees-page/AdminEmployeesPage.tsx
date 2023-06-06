import { FC } from 'react'
import { IconUsers } from 'assets/icons'
import { SidebarTabsList } from 'components/admin-components'
import { useParams } from 'react-router-dom'
import { useRelocateDefaultLocation } from 'hooks/useRelocateDefaultLocation.hook'
import { AdminEmployeesRegistrationPage } from './admin-employees-registration-page'
import { adminEmployeesPageTabs, ROUTES_EMPLOYEES } from './adminEmployeesPage.utils'
import { AdminEmployeesListPage } from './admin-employees-list-page'

const AdminEmployeesPage: FC = () => {
  const { employees } = useParams()

  useRelocateDefaultLocation({
    isParams: employees,
    relocateTo: adminEmployeesPageTabs[0].linkTo,
  })

  return (
    <>
      <SidebarTabsList
        sidebarTabItems={adminEmployeesPageTabs}
        titleIcon={<IconUsers />}
        title="Employees"
      />
      {employees === ROUTES_EMPLOYEES.REGISTRATION && <AdminEmployeesRegistrationPage />}
      {employees === ROUTES_EMPLOYEES.EMPLOYEES && <AdminEmployeesListPage />}
    </>
  )
}

export default AdminEmployeesPage
