import { FC, PropsWithChildren } from 'react'
import { CardContent, Typography } from '@mui/material'
import s from './OrderDetailsItemPriceInfo.module.scss'

interface OrderItemPriceInfoProps extends PropsWithChildren {
  totalPriceItem: number | undefined
}

const OrderDetailsItemPriceInfo: FC<OrderItemPriceInfoProps> = ({ totalPriceItem, children }) => {
  return (
    <CardContent className={s.wrapper}>
      <div className={s.priceWrapper}>
        <Typography variant="subtitle1" fontWeight="400">
          Price
        </Typography>
        <Typography variant="h3" fontWeight="600" color="primary">
          $ {totalPriceItem}
        </Typography>
      </div>
      {children}
    </CardContent>
  )
}

export default OrderDetailsItemPriceInfo
