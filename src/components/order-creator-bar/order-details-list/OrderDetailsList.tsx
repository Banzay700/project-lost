import { FC, useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'
import { OrderSummary } from 'components/index'
import { Button, DetailsListTitle } from 'UI/index'

import { OrderDetailsItem } from './order-details-item'
import s from './OrderDetailsList.module.scss'
import { useSmoothScrollbar } from 'hooks/useSmoothScrollbar.hook'
import { DishActiveType, DishType } from 'types/COMMON_TYPES'
import { useOrderReducer } from 'hooks/useOrderReducer.hook'

interface OrderListProps {
  orderItems: DishType[]
  isPicker?: boolean
  orderId: number
  onClick?: () => void
}

const OrderDetailsList: FC<OrderListProps> = ({ orderItems, isPicker, orderId, onClick }) => {
  const [orderItemsState, setOrderItemsState] = useState<DishType[]>(orderItems)
  const containerRef = useSmoothScrollbar<HTMLDivElement>()
  const total = orderItemsState.reduce((acc, item) => acc + item.dishTotalPrice, 0)
  const { activeOrder } = useOrderReducer()

  useEffect(() => {
    if (activeOrder.active) {
      setOrderItemsState(activeOrder.dishes)
    } else {
      setOrderItemsState(orderItems)
    }
  }, [activeOrder.active, activeOrder.dishes, orderItems])

  return (
    <Stack sx={{ height: '100%' }}>
      <DetailsListTitle title="Order details" orderId={orderId} />
      <div ref={containerRef} style={{ overflowY: 'auto', flex: 1 }}>
        <Box style={{ height: '200px' }}>
          {orderItemsState.map(({ id, title, picture, dishTotalPrice, amount }) => (
            <OrderDetailsItem
              key={id}
              id={id}
              title={title}
              total={dishTotalPrice}
              src={picture}
              isPicker={isPicker}
            />
          ))}
        </Box>
      </div>
      <Stack sx={{ gap: '24px', p: '18px 16px', borderTop: '1px solid #e4e4e4' }}>
        <OrderSummary tax={10} total={total} />
        <Button variant="contained" size="default" type="submit" fullWidth onClick={onClick}>
          {!activeOrder.active ? 'Create New Order' : 'Update Current Order'}
        </Button>
      </Stack>
    </Stack>
  )
}

export default OrderDetailsList
