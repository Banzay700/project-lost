import { FC } from 'react'
import { Box } from '@mui/material'

import { useSmoothScrollbar } from 'hooks'
import { OrderDishActiveType } from 'types'
import { OrderDetailsItem } from 'components/order-details-item'
import { ScrollbarContainer } from './OrderDishesList.styled'

interface OrderDishesListProps {
  dishes: OrderDishActiveType[]
}

const OrderDishesList: FC<OrderDishesListProps> = ({ dishes }) => {
  const containerRef = useSmoothScrollbar<HTMLDivElement>()

  return (
    <ScrollbarContainer ref={containerRef}>
      <Box sx={{ height: '200px' }}>
        {dishes.map(({ dishID, title, picture, dishTotalPrice, amount }) => (
          <OrderDetailsItem
            key={dishID}
            id={dishID}
            title={title}
            total={dishTotalPrice}
            src={picture}
            amount={amount}
          />
        ))}
      </Box>
    </ScrollbarContainer>
  )
}

export default OrderDishesList
