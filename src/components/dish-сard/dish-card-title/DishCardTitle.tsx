import { FC } from 'react'
import { CardContent, Typography } from '@mui/material'

interface DishCardTitleProps {
  title: string
}

const DishCardTitle: FC<DishCardTitleProps> = ({ title }) => {
  return (
    <CardContent sx={{ p: 0 }}>
      <Typography
        component="h5"
        variant="h2"
        color="secondary"
        fontWeight={600}
        textAlign="start"
        overflow="hidden"
        textOverflow="ellipsis">
        {title}
      </Typography>
    </CardContent>
  )
}

export default DishCardTitle
