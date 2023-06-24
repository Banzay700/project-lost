import { FC, useState } from 'react'

import { FadeIn } from 'utils/index'
import { OrderDetailsItemContent } from './order-details-item-content'
import { OrderDetailsDeleteCard } from './order-details-delete-card'

import { CardStyled, ListItemStyled } from './OrderDetailsItem.styled'

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
      <ListItemStyled>
        <CardStyled>
          {isDeleteCard && <OrderDetailsDeleteCard id={id} handleDeleteCard={setIsDeleteCard} />}
          {!isDeleteCard && (
            <OrderDetailsItemContent
              id={id}
              title={title}
              src={src}
              total={total}
              amount={amount}
              handleDeleteCard={setIsDeleteCard}
            />
          )}
        </CardStyled>
      </ListItemStyled>
    </FadeIn>
  )
}

export default OrderDetailsItem
