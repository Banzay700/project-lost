import { FC, useState } from 'react'

import { FadeIn } from 'utils'
import { OrderDetailsItemType } from 'types'
import { OrderDetailsItemContent } from './order-details-item-content'
import { OrderDetailsDeleteCard } from './order-details-delete-card'

import { CardStyled, ListItemStyled } from './OrderDetailsItem.styled'

const OrderDetailsItem: FC<OrderDetailsItemType> = ({ id, title, src, total, amount }) => {
  const [isDeleteCard, setIsDeleteCard] = useState(false)

  return (
    <FadeIn delay={20}>
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
