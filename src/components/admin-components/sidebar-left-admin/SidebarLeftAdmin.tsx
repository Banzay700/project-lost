import { FC } from 'react'
import { SidebarLeftList } from 'components'
import { Stack } from '@mui/material'
import { useLogoutMutation } from 'store/api'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'routes'
import { LogoutWrapper } from './SidebarLeftAdmin.styled'
import { sidebarLeftAdminMenu } from './sidebarLeftAdmin.utils'

const SidebarLeftAdmin: FC = () => {
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate(`/${ROUTES.LOGIN}`)
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
