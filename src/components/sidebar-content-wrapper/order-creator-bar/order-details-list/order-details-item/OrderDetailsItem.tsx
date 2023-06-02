import { FC } from 'react'
import { Card, ListItem, Stack } from '@mui/material'

import { Picker } from 'UI/index'
import { useOrderReducer } from 'hooks/index'
import { FadeIn } from 'utils/index'
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
  deleteIcon?: boolean
}

const OrderDetailsItem: FC<OrderItemProps> = ({
  id,
  title,
  src,
  isPicker,
  total,
  amount,
  deleteIcon,
}) => {
  const { changeDishAmount } = useOrderReducer()

  const handleChangeOrderInfo = (value: number) => {
    changeDishAmount({ id, amount: value })
  }

  return (
    <FadeIn delay={40}>
      <ListItem
        sx={{ width: '100%', p: 0, ':hover': { transition: '1s', background: '#F8F9FDFF' } }}>
        <Card className={s.card}>
          <OrderDetailsItemMedia src={src} alt={title} />
          <Stack sx={{ justifyContent: 'space-between', width: '100%' }}>
            <OrderDetailsItemTitle title={title} dishID={id} deleteIcon={deleteIcon} />
            <OrderDetailsItemPriceInfo totalPriceItem={total}>
              {isPicker && <Picker initialValue={amount} onChange={handleChangeOrderInfo} />}
            </OrderDetailsItemPriceInfo>
          </Stack>
        </Card>
      </ListItem>
    </FadeIn>
  )
}

export default OrderDetailsItem
