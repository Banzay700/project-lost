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
    <Stack alignItems="center" direction="row" spacing={2}>
      {role === 'Admin' && !isAdminLocation && (
        <Button
          variant="outlined"
          size={isMobile ? 'small' : 'medium'}
          icon={<Icon.ArrowLeft color={isMobile ? 'white' : 'secondary'} />}
          color="secondary"
          onClick={handleGoToAdminPanel}
        />
      )}
      <Logo
        link={ROUTES.HOME}
        routeLogoStyle={routeLogoStyle}
        widthLogo={isMobile ? '100px' : ''}
        heightLogo={isMobile ? '25px' : ''}
      />
    </Stack>
  )
}

export default LogoWrapper
