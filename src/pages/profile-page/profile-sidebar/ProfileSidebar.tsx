import { FC } from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import { Navigate } from 'react-router-dom'

import { ProfileAvatarForm } from 'components'
import { Button } from 'UI'
import { UserAvatar, UserType } from 'types'
import { Icon } from 'assets'
import { MS_CUSTOM_BREAKPOINT } from 'utils'
import { useLogoutMutation } from 'store/api'
import { SidebarWrapper } from './ProfileSidebar.styled'

interface ProfileSidebarProps {
  user: UserType
  submitChangeAvatar: (value: UserAvatar) => void
  isLogoutButton?: boolean
}

const ProfileSidebar: FC<ProfileSidebarProps> = ({ user, submitChangeAvatar, isLogoutButton }) => {
  const { firstName, secondName, userImage } = user
  const [logout, { isSuccess }] = useLogoutMutation()
  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down(MS_CUSTOM_BREAKPOINT))

  const handleLogout = () => logout()

  if (isSuccess) {
    return <Navigate to="/login" />
  }

  return (
    <SidebarWrapper>
      <ProfileAvatarForm
        firstName={firstName}
        secondName={secondName}
        userImage={userImage}
        onSubmit={submitChangeAvatar}
      />
      {!isMobile && (
        <Box sx={{ width: '100px' }}>
          {isLogoutButton && (
            <Button
              variant="contained"
              size="small"
              startIcon={<Icon.Logout />}
              onClick={handleLogout}
              fullWidth>
              Log out
            </Button>
          )}
        </Box>
      )}
    </SidebarWrapper>
  )
}

export default ProfileSidebar
