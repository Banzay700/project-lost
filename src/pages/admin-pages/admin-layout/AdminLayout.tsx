import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { AdaptiveHeaderWrapper, Header, SidebarLeftAdmin } from 'components'
import { navLink } from './adminLayout.utils'

const AdminLayout: FC = () => {
  return (
    <>
      <Header routeLogoStyle="Dashboard" dataLink={navLink} />
      <AdaptiveHeaderWrapper direction="row">
        <SidebarLeftAdmin />
        <Outlet />
      </AdaptiveHeaderWrapper>
    </>
  )
}

export default AdminLayout
