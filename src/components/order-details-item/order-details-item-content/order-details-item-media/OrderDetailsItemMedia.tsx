import { FC } from 'react'
import { CardMedia, useTheme, useMediaQuery } from '@mui/material'

interface CardItemMediaProps {
  src: string | undefined
  alt: string | undefined
}

const OrderDetailsItemMedia: FC<CardItemMediaProps> = ({ src, alt }) => {
  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('sm'))
  const cardMediaStyle = {
    width: isMobile ? '54px' : '74px',
    height: isMobile ? '54px' : '74px',
    borderRadius: '12px',
    flexShrink: 0,
  }
  return <CardMedia component="img" image={src} alt={alt} sx={cardMediaStyle} />
}

export default OrderDetailsItemMedia
