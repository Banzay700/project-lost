import { FC } from 'react'
import { useUserReducer } from 'hooks'
import { UserAvatar, UserPassword, UserUpdateInfo } from 'types'
import { Stack } from '@mui/material'
import { useUpdateUserMutation } from 'store/api'
import { useUpdateUserAvatarMutation } from 'store/api/users.api'
import { ProfileSidebar } from './profile-sidebar'
import { ProfileContent } from './profile-content'

const ProfilePage: FC = () => {
  const { userState } = useUserReducer()
  const [update] = useUpdateUserMutation()
  const [updateAvatar] = useUpdateUserAvatarMutation()
  const handleSubmitChangeProfile = (value: UserUpdateInfo) => {
    update({ id: userState.id, ...value })
  }

  const handleSubmitChangePassword = (value: UserPassword) => {
    update({ id: userState.id, ...value })
  }

  const handleSubmitChangeAvatar = (value: UserAvatar) => {
    if (value.picture) {
      const formData = new FormData()
      formData.append('picture', value.picture[0])
      updateAvatar({ id: userState.id, body: formData })
    }
  }

  return (
    <Stack direction="row" sx={{ width: '100%', height: '100%' }}>
      <ProfileSidebar user={userState} submitChangeAvatar={handleSubmitChangeAvatar} />
      <ProfileContent
        user={userState}
        submitChangePassword={handleSubmitChangePassword}
        submitChangeUserInfo={handleSubmitChangeProfile}
      />
    </Stack>
  )
}

export default ProfilePage
