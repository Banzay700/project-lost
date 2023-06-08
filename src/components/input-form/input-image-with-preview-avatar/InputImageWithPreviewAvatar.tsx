import { FC } from 'react'
import { Box } from '@mui/material'
import { InputImage } from 'components/input-form'

interface InputImageWithPreviewAvatarProps {
  isDisabled: boolean
  picture: string
  pictureAlt: string
  view: 'round' | 'squareRounding'
  width?: string
  height?: string
}

const InputImageWithPreviewAvatar: FC<InputImageWithPreviewAvatarProps> = ({
  picture,
  pictureAlt,
  view,
  width,
  height,
  isDisabled,
}) => {
  return (
    <Box sx={{ width: width || '300px', height: height || '300px' }}>
      {isDisabled ? (
        <img
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: view === 'round' ? '50%' : '16px',
          }}
          src={picture || ''}
          alt={pictureAlt}
        />
      ) : (
        <InputImage view={view} />
      )}
    </Box>
  )
}

export default InputImageWithPreviewAvatar
