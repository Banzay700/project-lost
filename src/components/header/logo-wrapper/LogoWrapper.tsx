import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, useTheme, useMediaQuery } from '@mui/material'

import { Button, Logo } from 'UI'
import { Icon } from 'assets'
import { UserType } from 'types'
import { useOrderReducer, useRootLocationPath } from 'hooks'
import { ROUTES } from 'routes'

interface LogoWrapperProps extends UserType {
  routeLogoStyle?: string
}

const LogoWrapper: FC<LogoWrapperProps> = ({ role, routeLogoStyle }) => {
  const navigate = useNavigate()
  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('sm'))
  const { clearNewOrderState } = useOrderReducer()
  const { isAdminLocation } = useRootLocationPath()

  const handleGoToAdminPanel = () => {
    clearNewOrderState()
    navigate('/admin')
  }

  return (
    <Stack alignItems="center" direction="row" spacing={4.8}>
      {role === 'Admin' && !isAdminLocation && (
        <Button
          variant="outlined"
          size="medium"
          icon={<Icon.ArrowLeft color={isMobile ? 'white' : 'secondary'} />}
          color="secondary"
          onClick={handleGoToAdminPanel}
        />
      )}
      <Logo link={ROUTES.HOME} routeLogoStyle={routeLogoStyle} />
    </Stack>
  )
}

export default LogoWrapper
