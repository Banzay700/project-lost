import { FC } from 'react'

import { OrderSummaryWrapper } from 'components'
import { Button, DetailsListTitle } from 'UI'
import { FadeIn, TAX } from 'utils'
import { useOrderReducer } from 'hooks'
import { ListInfoActionsContainer } from './OrderDetailsList.styled'
import { defineButtonText } from './OrderDetailsList.utils'
import OrderDishesList from './order-dishes-list/OrderDishesList'

interface OrderListProps {
  onClick?: () => void
}

const OrderDetailsList: FC<OrderListProps> = ({ onClick }) => {
  const { activeOrder } = useOrderReducer()
  const total = activeOrder.dishes.reduce((acc, item) => acc + item.dishTotalPrice, 0)
  const buttonText = defineButtonText(activeOrder)

  return (
    <FadeIn styles={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <DetailsListTitle title="Order details" orderNumber={activeOrder.orderNumber} />
      <OrderDishesList dishes={activeOrder.dishes} />
      <ListInfoActionsContainer>
        <OrderSummaryWrapper tax={TAX} total={total} />
        <Button variant="contained" size="medium" type="submit" fullWidth onClick={onClick}>
          {buttonText}
        </Button>
      </ListInfoActionsContainer>
    </FadeIn>
  )
}

export default OrderDetailsList
