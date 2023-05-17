import { FC } from 'react'
import s from './OrderSummary.module.scss'
import { Typography } from '@mui/material'

interface OrderSummaryProps {
  subTotal: number
  taxTenPercent: number
  total: number
}

const OrderSummary: FC<OrderSummaryProps> = ({ subTotal, taxTenPercent, total }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.textWrapper}>
        <div className={s.text}>
          <Typography variant="h3">Sub Total</Typography>
          <Typography variant="h3" color="secondary">
            $ {subTotal}
          </Typography>
        </div>
        <div className={s.text}>
          <Typography variant="h3">Tax (10%)</Typography>
          <Typography variant="h3" color="secondary">
            $ {taxTenPercent}
          </Typography>
        </div>
      </div>
      <div className={s.text}>
        <Typography variant="h3">Total</Typography>
        <Typography variant="h3" color="primary">
          $ {total}
        </Typography>
      </div>
    </div>
  )
}

export default OrderSummary
