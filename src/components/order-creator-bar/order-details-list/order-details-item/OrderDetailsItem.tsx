import { FC } from 'react'
import { Card, ListItem } from '@mui/material'
import cn from 'classnames'

import { Picker } from 'UI'
import { useOrderReducer } from 'hooks'
import { OrderDetailsItemMedia } from './order-details-item-media'
import { OrderDetailsItemTitle } from './order-details-item-title'
import { OrderDetailsItemPriceInfo } from './order-details-item-price-info'
import s from './OrderDetailsItem.module.scss'
import { FadeIn } from 'utils/index'

interface OrderItemProps {
  id: string
  title: string
  src: string
  total: number
  amount?: number
  isPicker?: boolean
}

const OrderDetailsItem: FC<OrderItemProps> = ({ id, title, src, isPicker, total, amount }) => {
  const { changeDishAmount } = useOrderReducer()

  const handleChangeOrderInfo = (value: number) => {
    changeDishAmount({ id, amount: value })
  }

  return (
    <FadeIn delay={50}>
      <ListItem className={s.wrapper}>
        <Card className={cn(s.card)}>
          <OrderDetailsItemMedia src={src} alt={title} />
          <div className={s.description}>
            <OrderDetailsItemTitle title={title} />
            <OrderDetailsItemPriceInfo totalPriceItem={total}>
              {isPicker && <Picker initialValue={amount} onChange={handleChangeOrderInfo} />}
            </OrderDetailsItemPriceInfo>
          </div>
        </Card>
      </ListItem>
    </FadeIn>
  )
}

export default OrderDetailsItem
