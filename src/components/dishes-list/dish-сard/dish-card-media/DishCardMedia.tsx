import { FC } from 'react'
import { CardMedia } from '@mui/material'

interface DishCardMediaProps {
  title: string
  image: string
  onClick: () => void
}

const DishCardMedia: FC<DishCardMediaProps> = ({ title, image, onClick }) => {
  return (
    <CardMedia
      sx={{
        borderRadius: '12px',
        minHeight: '158px',
        maxHeight: '158px',
        flex: 1,
        objectFit: 'cover',
        cursor: 'pointer',
        border: '1px solid transparent',
        transition: '0.25s',
        '&:hover': {
          border: '1px solid #ff5c00',
        },
      }}
      component="img"
      image={image}
      alt={title}
      onClick={onClick}
    />
  )
}

export default DishCardMedia
