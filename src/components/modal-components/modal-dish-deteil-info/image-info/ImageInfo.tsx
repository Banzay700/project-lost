import { FC } from 'react'
import { Box } from '@mui/material'

interface ImageInfoProps {
  picture: string
  alt: string
}

const ImageInfo: FC<ImageInfoProps> = ({ picture, alt }) => {
  return (
    <Box>
      <img
        src={picture}
        alt={alt}
        style={{ width: '200px', height: '150px', objectFit: 'cover', borderRadius: '16px' }}
      />
    </Box>
  )
}

export default ImageInfo
