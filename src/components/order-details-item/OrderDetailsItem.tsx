import { FC, useState } from 'react'
import { Card, ListItem } from '@mui/material'

import { FadeIn } from 'utils/index'
import { OrderDetailsItemContent } from './order-details-item-content'
import { OrderDetailsDeleteCard } from './order-details-delete-card'
import s from './OrderDetailsItem.module.scss'

interface OrderItemProps {
  id: string
  title: string | undefined
  src: string | undefined
  total: number | undefined
  amount?: number
}

const OrderDetailsItem: FC<OrderItemProps> = ({ id, title, src, total, amount }) => {
  const [isDeleteCard, setIsDeleteCard] = useState(false)

  return (
    <FadeIn delay={50}>
      <ListItem
        sx={{ width: '100%', p: 0, ':hover': { transition: '1s', background: '#F8F9FDFF' } }}>
        <Card className={s.card}>
          {isDeleteCard ? (
            <OrderDetailsDeleteCard id={id} handleDeleteCard={setIsDeleteCard} />
          ) : (
            <OrderDetailsItemContent
              id={id}
              title={title}
              src={src}
              total={total}
              amount={amount}
              handleDeleteCard={setIsDeleteCard}
            />
          )}
        </Card>
      </ListItem>
    </FadeIn>
  )
}

export default OrderDetailsItem
