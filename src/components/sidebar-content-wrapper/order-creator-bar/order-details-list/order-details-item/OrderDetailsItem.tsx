import { FC, useState } from 'react'
import { Card, ListItem } from '@mui/material'

import { Picker } from 'UI'
import { useOrderReducer } from 'hooks'
import { FadeIn } from 'utils'
import { OrderDetailsItemContent } from './order-details-item-content'
import { OrderDetailsDeleteCard } from './order-details-delete-card'
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
  const [isDeleteCard, setIsDeleteCard] = useState(false)
  const { changeDishAmount } = useOrderReducer()

  const handleChangeOrderInfo = (value: number) => {
    changeDishAmount({ id, amount: value })
  }

  return (
    <FadeIn delay={50}>
      <ListItem
        sx={{ width: '100%', p: 0, ':hover': { transition: '1s', background: '#F8F9FDFF' } }}>
        <Card className={s.card}>
          {isDeleteCard ? (
            <OrderDetailsDeleteCard id={id} handleDeleteCard={setIsDeleteCard} />
          ) : (
            <OrderDetailsItemContent title={title} src={src} total={total}>
              {isPicker && (
                <Picker
                  initialValue={amount}
                  onChange={handleChangeOrderInfo}
                  handleDeleteCard={setIsDeleteCard}
                />
              )}
            </OrderDetailsItemContent>
          )}
        </Card>
      </ListItem>
    </FadeIn>
  )
}

export default OrderDetailsItem
