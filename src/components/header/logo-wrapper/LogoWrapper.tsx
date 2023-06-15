import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material'

import { Button, Logo } from 'UI'
import { Icon } from 'assets'
import { UserType } from 'types'
import { ROUTES } from 'routes/routes.utils'
import { useOrderReducer } from 'hooks/useOrderReducer.hook'

const LogoWrapper: FC<UserType> = ({ role }) => {
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
          size="default"
          icon={<Icon.ArrowLeft color="secondary" />}
          color="secondary"
          onClick={handleGoToAdminPanel}
        />
      )}
      <Logo view="both" link="/" />
    </Stack>
  )
}

export default LogoWrapper
