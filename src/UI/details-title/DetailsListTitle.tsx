import { FC } from 'react'
import { Typography } from '@mui/material'
import s from './DetailsListTitle.module.scss'

interface OrderDetailsTitleProps {
  title: string
  orderNumber: number
  staffName?: string
  staffSurname?: string
}

const DetailsListTitle: FC<OrderDetailsTitleProps> = ({
  title,
  orderNumber,
  staffName,
  staffSurname,
}) => {
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
      {staffName && (
        <Typography variant="subtitle1" component="p">
          Waiter: {staffName} {staffSurname}
        </Typography>
      )}
    </div>
  )
}

export default DetailsListTitle
