import { FC } from 'react'
import { UserType, UserUpdateInfo } from 'types'
import { ProfileInfoUserForm } from 'components/form-componets'
import { ContentWrapper } from './ProfileContent.styled'

interface ProfileContentProps {
  user: UserType
  submitChangeUserInfo: (value: UserUpdateInfo) => void
}

const ProfileContent: FC<ProfileContentProps> = (props) => {
  const { user, submitChangeUserInfo } = props

  return (
    <ContentWrapper>
      <ProfileInfoUserForm
        onSubmit={submitChangeUserInfo}
        initialValues={{ ...user, password: '' }}
      />
    </ContentWrapper>
  )
}

export default ProfileContent
