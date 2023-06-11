import { FC, useState } from 'react'
import { InputImageWithPreviewAvatar } from 'components'
import { Stack } from '@mui/material'
import { Button } from 'UI/button'
import { useFormikContext } from 'formik'

interface UpdateCategoryPictureProps {
  picture: string
  pictureAlt: string
}

const UpdateCategoryPicture: FC<UpdateCategoryPictureProps> = ({ picture, pictureAlt }) => {
  const [isDisabled, setIsDisabled] = useState(false)
  const { setFieldValue } = useFormikContext()

  const handleIsDisabled = () => setIsDisabled((prevState) => !prevState)
  const handleResetPicture = () => setFieldValue('picture', '')
  return (
    <Stack>
      <InputImageWithPreviewAvatar
        isDisabled={isDisabled}
        picture={picture}
        pictureAlt={pictureAlt}
        view="squareRounding"
      />
      {isDisabled ? (
        <Button variant="outlined" size="small" type="button" onClick={handleIsDisabled}>
          Change Icon
        </Button>
      ) : (
        <Stack direction="row" sx={{ width: '100%', gap: '20px' }}>
          <Button
            variant="outlined"
            size="small"
            type="button"
            onClick={handleResetPicture}
            fullWidth>
            Cancel
          </Button>
          <Button variant="contained" size="small" type="submit" fullWidth>
            Save Icon
          </Button>
        </Stack>
      )}
    </Stack>
  )
}

export default UpdateCategoryPicture
