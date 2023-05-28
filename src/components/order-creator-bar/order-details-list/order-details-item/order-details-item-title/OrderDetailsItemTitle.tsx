import { FC } from 'react'
import { CardContent, Typography } from '@mui/material'
import s from './OrderDetailsItemTitle.module.scss'

interface CardItemTitleProps {
  title: string
}

const OrderDetailsItemTitle: FC<CardItemTitleProps> = ({ title }) => {
  return (
    <CardContent className={s.wrapper}>
      <Typography variant="h2" component="h3" color="secondary" fontWeight="600">
        {title}
      </Typography>
    </CardContent>
  )
}

export default OrderDetailsItemTitle
