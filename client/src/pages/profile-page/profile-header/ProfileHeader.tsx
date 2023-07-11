import { FC } from 'react'

import { Decor, ProfileHeaderWrapper, TitleWrapper } from './ProfileHeader.styled'

const ProfileHeader: FC = () => {
  return (
    <ProfileHeaderWrapper>
      <Decor />
      <TitleWrapper variant="dashNumb" color="secondary" flexWrap="wrap">
        Employee profile
      </TitleWrapper>
    </ProfileHeaderWrapper>
  )
}

export default ProfileHeader
