import { FC } from 'react'
import { Stack } from '@mui/material'
import { Navigate } from 'react-router-dom'

import { ProfileAvatarForm } from 'components'
import { Button } from 'UI'
import { UserAvatar, UserType } from 'types'
import { Icon } from 'assets'
import { useLogoutMutation } from 'store/api'

interface ProfileSidebarProps {
  user: UserType
  submitChangeAvatar: (value: UserAvatar) => void
  isLogoutButton?: boolean
}

const ProfileSidebar: FC<ProfileSidebarProps> = ({ user, submitChangeAvatar, isLogoutButton }) => {
  const [logout, { isSuccess }] = useLogoutMutation()
  const { firstName, secondName, userImage } = user

  const handleLogout = () => {
    logout()
  }

  if (isSuccess) {
    return <Navigate to="/login" />
  }

  return (
    <Stack
      sx={{
        width: 'fit-content',
        p: '24px',
        height: '100%',
        borderRight: '1px solid #e4e4e4',
        alignItems: 'start',
        justifyContent: 'space-between',
      }}>
      <ProfileAvatarForm
        firstName={firstName}
        secondName={secondName}
        userImage={userImage}
        onSubmit={submitChangeAvatar}
      />
      {isLogoutButton && (
        <Button variant="contained" size="small" startIcon={<Icon.Logout />} onClick={handleLogout}>
          Logout
        </Button>
      )}
    </Stack>
  )
}

export default ProfileSidebar
