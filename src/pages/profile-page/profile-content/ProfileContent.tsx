import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { ProfileInfoUserForm, ProfilePasswordForm } from 'components/form-componets/profile-form'
import { UserPassword, UserType, UserUpdateInfo } from 'types'

interface ProfileContentProps {
  user: UserType
  submitChangeUserInfo: (value: UserUpdateInfo) => void
  submitChangePassword: (value: UserPassword) => void
}

const ProfileContent: FC<ProfileContentProps> = ({
  user,
  submitChangeUserInfo,
  submitChangePassword,
}) => {
  return (
    <Stack sx={{ width: '100%' }}>
      <Box sx={{ p: '16px 40px', borderBottom: '1px solid #e4e4e4' }}>
        <Typography variant="dashNumb" component="p" color="secondary" flexWrap="wrap">
          Coco profile
        </Typography>
      </Box>
      <Stack direction="row" sx={{ width: '100%', gap: '20px', p: '40px' }}>
        <Stack sx={{ width: '70%', gap: '20px' }}>
          <ProfileInfoUserForm onSubmit={submitChangeUserInfo} initialValues={user} />
        </Stack>
        <Box sx={{ width: '30%' }}>
          <ProfilePasswordForm onSubmit={submitChangePassword} initialValues={{ password: '' }} />
        </Box>
      </Stack>
    </Stack>
  )
}

export default ProfileContent
