import { FC } from 'react'
import { CardMedia } from '@mui/material'
import s from './OrderDetailsItemMedia.module.scss'

interface CardItemMediaProps {
  src: string
  alt: string
}

const OrderDetailsItemMedia: FC<CardItemMediaProps> = ({ src, alt }) => {
  return <CardMedia component="img" className={s.wrapper} image={src} alt={alt} />
}

export default OrderDetailsItemMedia
