import { FC } from 'react'
import { Card, ListItem, Stack } from '@mui/material'

import { Picker } from 'UI'
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
  amount?: number
  isPicker?: boolean
}

const OrderDetailsItem: FC<OrderItemProps> = ({ id, title, src, isPicker, total, amount }) => {
  const { changeDishAmount } = useOrderReducer()

  const handleChangeOrderInfo = (value: number) => {
    changeDishAmount({ id, amount: value })
  }

  return (
    <ListItem sx={{ width: '100%', p: 0, ':hover': { transition: '1s', background: '#F8F9FDFF' } }}>
      <Card className={s.card}>
        <OrderDetailsItemMedia src={src} alt={title} />
        <Stack sx={{ justifyContent: 'space-between', width: '100%' }}>
          <OrderDetailsItemTitle title={title} dishID={id} />
          <OrderDetailsItemPriceInfo totalPriceItem={total}>
            {isPicker && <Picker initialValue={amount} onChange={handleChangeOrderInfo} />}
          </OrderDetailsItemPriceInfo>
        </Stack>
      </Card>
    </ListItem>
  )
}

export default OrderDetailsItem
