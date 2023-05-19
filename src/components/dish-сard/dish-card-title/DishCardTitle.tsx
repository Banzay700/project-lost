import { FC } from 'react'
import { CardContent, Typography } from '@mui/material'

interface DishCardTitleProps {
  title: string
  isHovered: boolean
}

const DishCardTitle: FC<DishCardTitleProps> = ({ title, isHovered }) => {
  const textPosition = isHovered ? 'start' : 'center'
  return (
    <CardContent sx={{ p: 0 }}>
      <Typography
        component="h5"
        variant="h2"
        color="secondary"
        fontWeight={600}
        textAlign={textPosition}
        overflow="hidden"
        textOverflow="ellipsis">
        {title}
      </Typography>
    </CardContent>
  )
}

export default DishCardTitle
