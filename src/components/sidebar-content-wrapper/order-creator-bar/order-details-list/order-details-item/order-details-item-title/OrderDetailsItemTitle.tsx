import { FC } from 'react'
import { CardContent, Typography } from '@mui/material'

interface CardItemTitleProps {
  title: string
}

const OrderDetailsItemTitle: FC<CardItemTitleProps> = ({ title }) => {
  return (
    <CardContent sx={{ flex: '1 0 auto', p: 0, display: 'flex' }}>
      <Typography variant="h2" component="h3" color="secondary" fontWeight="600" flexGrow={1}>
        {title}
      </Typography>
    </CardContent>
  )
}

export default OrderDetailsItemTitle
