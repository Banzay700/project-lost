import { FC, useState } from 'react'
import { InputImageWithPreviewAvatar } from 'components'
import { Button } from 'UI'
import { Stack } from '@mui/material'
import { useFormikContext } from 'formik'

interface ImageDragDropProps {
  defaultPicture: string
  pictureAlt: string
}

const ImageDragDrop: FC<ImageDragDropProps> = ({ defaultPicture, pictureAlt }) => {
  const [changePicture, setChangePicture] = useState(true)
  const { setFieldValue } = useFormikContext()

  const handleChangePicture = () => {
    setChangePicture((prevState) => !prevState)
  }

  const handleResetForm = () => {
    setFieldValue('picture', defaultPicture)
    setChangePicture((prevState) => !prevState)
  }

  return (
    <Stack
      sx={{
        gap: '20px',
      }}>
      <InputImageWithPreviewAvatar
        isDisabled={changePicture}
        picture={defaultPicture}
        pictureAlt={pictureAlt}
        view="squareRounding"
      />
      {changePicture ? (
        <Button
          variant="outlined"
          size="small"
          type="button"
          onClick={handleChangePicture}
          fullWidth>
          Change picture
        </Button>
      ) : (
        <Button variant="outlined" size="small" type="button" onClick={handleResetForm} fullWidth>
          Cancel
        </Button>
      )}
    </Stack>
  )
}

export default ImageDragDrop
