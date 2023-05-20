import { FC } from 'react'
import { CardMedia } from '@mui/material'
import s from './DishCardMedia.module.scss'

interface DishCardMediaProps {
  title: string
  image: string
}

const DishCardMedia: FC<DishCardMediaProps> = ({ title, image }) => {
  return (
    <CardMedia
      sx={{ borderRadius: '12px', height: '158px' }}
      component="img"
      image={image}
      alt={title}
    />
  )
}

export default DishCardMedia
