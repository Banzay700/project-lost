import { FC } from 'react'
import { CardMedia } from '@mui/material'

interface DishCardMediaProps {
  title: string
  image: string
}

const DishCardMedia: FC<DishCardMediaProps> = ({ title, image }) => {
  return (
    <CardMedia
      sx={{
        borderRadius: '12px',
        minHeight: '158px',
        maxHeight: '158px',
        flex: 1,
        objectFit: 'cover',
      }}
      component="img"
      image={image}
      alt={title}
    />
  )
}

export default DishCardMedia
