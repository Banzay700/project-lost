import { FC } from 'react'
import { SidebarLeftList } from 'components'
import { Stack } from '@mui/material'
import { useLogoutMutation } from 'store/api'
import { Navigate } from 'react-router-dom'
import { LogoutWrapper } from './SidebarLeftAdmin.styled'
import { sidebarLeftAdminMenu } from './sidebarLeftAdmin.utils'

const SidebarLeftAdmin: FC = () => {
  const [logout, { isSuccess }] = useLogoutMutation()

  const handleLogout = () => {
    logout()
  }

  if (isSuccess) {
    return <Navigate to="/login" />
  }

  return (
    <Stack sx={{ background: '#19191C' }}>
      <SidebarLeftList sidebarItems={sidebarLeftAdminMenu} />
      <Stack sx={{ p: '16px', alignItems: 'center' }}>
        <LogoutWrapper onClick={handleLogout} />
      </Stack>
    </Stack>
  )
}

export default SidebarLeftAdmin
