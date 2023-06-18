import { FC, useState } from 'react'
import { Form, Formik } from 'formik'

import { UserAvatar } from 'types'
import { ProfilePicture } from './profile-picture'
import { initialValues, validationSchema } from './profileAvatarForm.utils'

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

  const formikConfig = {
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  }

  return (
    <Formik {...formikConfig}>
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
