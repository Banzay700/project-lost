import { FC } from 'react'
import { Box } from '@mui/material'
import { InputImage } from 'components'
import { ImageWrapper } from './InputImageWithPreviewAvatar.styled'

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
        <ImageWrapper $view={view} src={picture || ''} alt={pictureAlt} />
      ) : (
        <InputImage view={view} />
      )}
    </Box>
  )
}

export default InputImageWithPreviewAvatar
