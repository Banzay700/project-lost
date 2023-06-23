import { FC } from 'react'

import { OrderSummaryWrapper } from 'components'
import { Button, DetailsListTitle } from 'UI'
import { FadeIn } from 'utils'
import { useOrderReducer } from 'hooks'
import { ListInfoActionsContainer } from './OrderDetailsList.styled'
import OrderDishesList from './order-dishes-list/OrderDishesList'

interface OrderListProps {
  onClick?: () => void
}

const OrderDetailsList: FC<OrderListProps> = ({ onClick }) => {
  const { activeOrder } = useOrderReducer()
  const total = activeOrder.dishes.reduce((acc, item) => acc + item.dishTotalPrice, 0)
  const buttonText = activeOrder.storeStatus === 'update' ? 'Update order' : 'Create New Order'

  return (
    <FadeIn styles={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <DetailsListTitle title="Order details" orderNumber={activeOrder.orderNumber} />
      <OrderDishesList dishes={activeOrder.dishes} />
      <ListInfoActionsContainer>
        <OrderSummaryWrapper tax={10} total={total} />
        <Button variant="contained" size="medium" type="submit" fullWidth onClick={onClick}>
          {buttonText}
        </Button>
      </ListInfoActionsContainer>
    </FadeIn>
  )
}

export default OrderDetailsList
