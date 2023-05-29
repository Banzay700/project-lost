import { FC } from 'react'
import { Typography } from '@mui/material'
import s from './DetailsListTitle.module.scss'

interface OrderDetailsTitleProps {
  title: string
  orderNumber: number
}

const DetailsListTitle: FC<OrderDetailsTitleProps> = ({ title, orderNumber }) => {
  return (
    <div className={s.wrapper}>
      <Typography variant="h1" component="p" color="secondary">
        {title}
      </Typography>
      {orderNumber && (
        <Typography variant="h3" component="p">
          Order # {orderNumber}
        </Typography>
      )}
    </div>
  )
}

export default DetailsListTitle
