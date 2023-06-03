import { FC } from 'react'
import { Stack } from '@mui/material'

import { IconArrowLeft } from 'assets'
import { Button, Logo } from 'UI'
import { UserType } from 'types/UserType'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'routes/routes.utils'

const LogoWrapper: FC<UserType> = ({ role }) => {
  const navigate = useNavigate()

  const handleGoToAdminPanel = () => {
    navigate(ROUTES.ADMIN_PANEL)
  }

  return (
    <Stack alignItems="center" direction="row" spacing={4.8}>
      {role === 'Admin' && (
        <Button
          variant="outlined"
          size="default"
          icon={<IconArrowLeft color="secondary" />}
          color="secondary"
          onClick={handleGoToAdminPanel}
        />
      )}
      <Logo view="both" link="/" />
    </Stack>
  )
}

export default LogoWrapper
