import { Form, Formik } from 'formik'
import { FC, useState } from 'react'
import { UserAvatar } from 'types/index'
import { ProfilePicture } from './profile-picture'

interface ProfileFormAvatarProps {
  userImage?: string
  firstName: string
  secondName: string
  onSubmit: (value: UserAvatar) => void
}

const ProfileAvatarForm: FC<ProfileFormAvatarProps> = ({
  userImage,
  firstName,
  secondName,
  onSubmit,
}) => {
  const [isDisabled, setIsDisabled] = useState(true)

  const handleSubmit = (value: UserAvatar) => {
    onSubmit(value)
    setIsDisabled(true)
  }

  const handleIsDisabled = () => {
    setIsDisabled((prevState) => !prevState)
  }

  return (
    <Formik
      initialValues={{
        picture: null,
      }}
      onSubmit={handleSubmit}>
      <Form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          width: '100%',
        }}>
        <ProfilePicture
          isDisabled={isDisabled}
          userImage={userImage}
          title={`${firstName} ${secondName}`}
          handleIsDisabled={handleIsDisabled}
        />
      </Form>
    </Formik>
  )
}

export default ProfileAvatarForm
