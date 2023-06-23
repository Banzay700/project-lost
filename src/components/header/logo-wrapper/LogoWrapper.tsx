import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material'

import { Button, Logo } from 'UI'
import { Icon } from 'assets'
import { UserType } from 'types'
import { ROUTES } from 'routes/routes.utils'
import { useOrderReducer } from 'hooks/useOrderReducer.hook'

interface LogoWrapperProps extends UserType {
  route?: string
}

const LogoWrapper: FC<LogoWrapperProps> = ({ role, route }) => {
  const navigate = useNavigate()
  const { clearNewOrderState } = useOrderReducer()

  const handleGoToAdminPanel = () => {
    clearNewOrderState()
    navigate(ROUTES.ADMIN_PANEL)
  }

  return (
    <Stack alignItems="center" direction="row" spacing={4.8}>
      {role === 'Admin' && (
        <Button
          variant="outlined"
          size="medium"
          icon={<Icon.ArrowLeft color="secondary" />}
          color="secondary"
          onClick={handleGoToAdminPanel}
        />
      )}
      <Logo link="/home" route={route} />
    </Stack>
  )
}

export default LogoWrapper
