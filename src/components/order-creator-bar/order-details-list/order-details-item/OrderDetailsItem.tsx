import { FC, useEffect, useState } from 'react'
import { Card, ListItem } from '@mui/material'
import { Picker } from 'UI/index'
import cn from 'classnames'
import { useOrderReducer } from 'hooks'
import { OrderDetailsItemMedia } from './order-details-item-media'
import { OrderDetailsItemTitle } from './order-details-item-title'
import { OrderDetailsItemPriceInfo } from './order-details-item-price-info'
import s from './OrderDetailsItem.module.scss'

interface OrderItemProps {
  id: string
  title: string
  src: string
  total: number
  isPicker?: boolean
}

const OrderDetailsItem: FC<OrderItemProps> = ({ id, title, src, isPicker, total }) => {
  const { dishes, addDish } = useOrderReducer()

  const handleChangeOrderInfo = (value: number) => {
    const dish = dishes.find((item) => item.id === id)

    if (dish) {
      addDish({ ...dish, amount: value })
    }
  }

  return (
    <ListItem className={s.wrapper}>
      <Card className={cn(s.card)}>
        <OrderDetailsItemMedia src={src} alt={title} />
        <div className={s.description}>
          <OrderDetailsItemTitle title={title} />
          <OrderDetailsItemPriceInfo totalPriceItem={total}>
            {isPicker && <Picker onChange={handleChangeOrderInfo} />}
          </OrderDetailsItemPriceInfo>
        </div>
      </Card>
    </ListItem>
  )
}

export default OrderDetailsItem
