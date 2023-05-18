import { FC, useEffect, useState } from 'react'
import { Card, ListItem } from '@mui/material'
import { Picker } from 'UI'
import cn from 'classnames'
import s from './OrderDetailsItem.module.scss'
import { OrderDetailsItemMedia } from './order-details-item-media'
import { OrderDetailsItemTitle } from './order-details-item-title'
import { OrderDetailsItemPriceInfo } from './order-details-item-price-info'

interface OrderItemProps {
  id: string
  title: string
  price: number
  src: string
  isPicker?: boolean
  onChange?: (props: { id: string; price: number }) => void
}

const OrderDetailsItem: FC<OrderItemProps> = ({ id, title, price, src, isPicker, onChange }) => {
  const [totalPriceItem, setTotalPriceItem] = useState(price)

  const handleChangeOrderInfo = (value: number) => {
    setTotalPriceItem(value * price)
  }

  useEffect(() => {
    if (onChange) {
      onChange({ id, price: totalPriceItem })
    }
  }, [totalPriceItem, id, onChange])

  return (
    <ListItem className={s.wrapper}>
      <Card className={cn(s.card)}>
        <OrderDetailsItemMedia src={src} alt={title} />
        <div className={s.description}>
          <OrderDetailsItemTitle title={title} />
          <OrderDetailsItemPriceInfo totalPriceItem={totalPriceItem}>
            {isPicker && onChange && <Picker onChange={handleChangeOrderInfo} />}
          </OrderDetailsItemPriceInfo>
        </div>
      </Card>
    </ListItem>
  )
}

export default OrderDetailsItem
