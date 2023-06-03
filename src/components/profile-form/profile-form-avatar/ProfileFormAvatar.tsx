import { Form, Formik } from 'formik'
import { FC, useState } from 'react'
import { Button } from 'UI/button'
import { Box, Stack, Typography } from '@mui/material'
import { UserAvatar } from 'types'
import { InputImage } from 'components/input-form'

interface ProfileFormAvatarProps {
  userImage?: string
  firstName: string
  secondName: string
  onSubmit: (value: UserAvatar) => void
}

const ProfileFormAvatar: FC<ProfileFormAvatarProps> = ({
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
        <Box sx={{ width: '300px', height: '300px' }}>
          {isDisabled ? (
            <img
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
              src={
                userImage ||
                'https://res.cloudinary.com/dz5jl6tzt/image/upload/v1685188868/userAvatar_fbe972.webp'
              }
              alt="user avatar"
            />
          ) : (
            <InputImage view="round" />
          )}
        </Box>
        <Typography variant="h1" component="p" color="secondary" flexWrap="wrap" textAlign="center">
          {`${firstName} ${secondName}`}
        </Typography>
        {isDisabled ? (
          <Button variant="outlined" size="small" type="button" onClick={handleIsDisabled}>
            Change avatar
          </Button>
        ) : (
          <Stack direction="row" sx={{ width: '100%', gap: '20px' }}>
            <Button
              variant="outlined"
              size="small"
              type="button"
              onClick={handleIsDisabled}
              fullWidth>
              Cancel
            </Button>
            <Button variant="contained" size="small" type="submit" fullWidth>
              Save Avatar
            </Button>
          </Stack>
        )}
      </Form>
    </Formik>
  )
}

export default ProfileFormAvatar
