import { FC } from 'react'
import { Typography } from '@mui/material'
import s from './DetailsListTitle.module.scss'

interface OrderDetailsTitleProps {
  title: string
  orderId?: string
}

const DetailsListTitle: FC<OrderDetailsTitleProps> = ({ title, orderId }) => {
  return (
    <div className={s.wrapper}>
      <Typography variant="h1" component="p" color="secondary">
        {title}
      </Typography>
      {orderId && (
        <Typography variant="h3" component="p">
          Order #{orderId}
        </Typography>
      )}
    </div>
  )
}

export default DetailsListTitle
