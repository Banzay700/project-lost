import { FC, useState } from 'react'
import { InputImage } from 'components'
import { Button } from 'UI'
import { Box, Stack } from '@mui/material'
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
      <Box sx={{ width: '300px', height: '300px' }}>
        {changePicture ? (
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '16px',
              border: '1px solid #e4e4e4',
            }}
            src={defaultPicture}
            alt={pictureAlt}
          />
        ) : (
          <InputImage view="squareRounding" />
        )}
      </Box>

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
