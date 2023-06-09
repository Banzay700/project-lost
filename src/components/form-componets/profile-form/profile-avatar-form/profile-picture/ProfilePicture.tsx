import { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import { InputImageWithPreviewAvatar } from 'components'
import { Button } from 'UI/button'
import { useFormikContext } from 'formik'

interface ProfilePictureProps {
  userImage?: string
  title: string
  isDisabled: boolean
  handleIsDisabled: () => void
}

const ProfilePicture: FC<ProfilePictureProps> = ({
  userImage,
  title,
  isDisabled,
  handleIsDisabled,
}) => {
  const { setFieldValue } = useFormikContext()

  const handleResetAvatar = () => {
    setFieldValue('picture', '')
    handleIsDisabled()
  }

  return (
    <>
      <InputImageWithPreviewAvatar
        picture={
          userImage ||
          'https://res.cloudinary.com/dz5jl6tzt/image/upload/v1685188868/userAvatar_fbe972.webp'
        }
        pictureAlt={title}
        isDisabled={isDisabled}
        view="round"
      />
      <Typography variant="h1" component="p" color="secondary" flexWrap="wrap" textAlign="center">
        {title}
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
            onClick={handleResetAvatar}
            fullWidth>
            Cancel
          </Button>
          <Button variant="contained" size="small" type="submit" fullWidth>
            Save Avatar
          </Button>
        </Stack>
      )}
    </>
  )
}

export default ProfilePicture
