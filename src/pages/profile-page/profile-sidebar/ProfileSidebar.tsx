import { FC } from 'react'
import { Stack } from '@mui/material'
import { ProfileFormAvatar } from 'components/profile-form'
import { UserAvatar, UserType } from 'types/UserType'
import { Button } from 'UI/button'
import { IconLogout } from 'assets/icons'
import { useLogoutMutation } from 'store/api'
import { Navigate } from 'react-router-dom'

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
      <ProfileFormAvatar
        firstName={firstName}
        secondName={secondName}
        userImage={userImage}
        onSubmit={submitChangeAvatar}
      />
      {isLogoutButton && (
        <Button variant="contained" size="small" startIcon={<IconLogout />} onClick={handleLogout}>
          Logout
        </Button>
      )}
    </Stack>
  )
}

export default ProfileSidebar
