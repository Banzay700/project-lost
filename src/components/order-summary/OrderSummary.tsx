import { FC } from 'react'
import { Typography } from '@mui/material'
import { calculateValues } from './orderSummary.utils'
import s from './OrderSummary.module.scss'

interface OrderSummaryProps {
  tax: number
  total: number
}

const OrderSummary: FC<OrderSummaryProps> = ({ total, tax }) => {
  const { taxValue, totalValue } = calculateValues(total, tax)

  return (
    <div className={s.wrapper}>
      <div className={s.textWrapper}>
        <div className={s.text}>
          <Typography variant="h3">Sub Total</Typography>
          <Typography variant="h3" color="secondary">
            $ {total}
          </Typography>
        </div>
        <div className={s.text}>
          <Typography variant="h3">Tax ({tax}%)</Typography>
          <Typography variant="h3" color="secondary">
            $ {taxValue}
          </Typography>
        </div>
      </div>
      <div className={s.text}>
        <Typography variant="h3">Total</Typography>
        <Typography variant="h3" color="primary">
          $ {totalValue}
        </Typography>
      </div>
    </div>
  )
}

export default OrderSummary
