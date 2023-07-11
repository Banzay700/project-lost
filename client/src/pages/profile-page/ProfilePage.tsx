import { FC } from 'react'
import { useSmoothScrollbar, useUserReducer } from 'hooks'
import { UserAvatar, UserUpdateInfo } from 'types'
import { useUpdateUserMutation } from 'store/api'
import { useUpdateUserAvatarMutation } from 'store/api/users.api'
import { ProfileSidebar } from './profile-sidebar'
import { ProfileContent } from './profile-content'
import { ProfileHeader } from './profile-header'
import {
  ProfileContentContainer,
  ProfilePageWrapper,
  ScrollbarContainer,
} from './ProfilePage.styled'

interface ProfilePageProps {
  isLogoutButton?: boolean
}

const ProfilePage: FC<ProfilePageProps> = ({ isLogoutButton }) => {
  const { userState } = useUserReducer()
  const [update] = useUpdateUserMutation()
  const [updateAvatar] = useUpdateUserAvatarMutation()
  const containerRef = useSmoothScrollbar<HTMLDivElement>()

  const handleSubmitChangeProfile = (value: UserUpdateInfo) => {
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
    <ProfilePageWrapper ref={containerRef}>
      <ScrollbarContainer>
        <ProfileHeader />
        <ProfileContentContainer>
          <ProfileSidebar
            user={userState}
            submitChangeAvatar={handleSubmitChangeAvatar}
            isLogoutButton={isLogoutButton}
          />
          <ProfileContent user={userState} submitChangeUserInfo={handleSubmitChangeProfile} />
        </ProfileContentContainer>
      </ScrollbarContainer>
    </ProfilePageWrapper>
  )
}

export default ProfilePage
