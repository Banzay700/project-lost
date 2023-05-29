import { FC } from 'react'
import { Box, Stack } from '@mui/material'

import { OrderSummary } from 'components'
import { Button, DetailsListTitle } from 'UI'
import { useSmoothScrollbar } from 'hooks'
import { OrderDetailsItem } from 'components/order-creator-bar/order-details-list/order-details-item'
import { OrderDishActiveType } from 'types'

interface OrderListProps {
  orderItems: OrderDishActiveType[]
  isPicker?: boolean
  orderId: number
  onClick?: () => void
}

const OrderInfoList: FC<OrderListProps> = ({ orderItems, isPicker, orderId, onClick }) => {
  const containerRef = useSmoothScrollbar<HTMLDivElement>()
  const total = orderItems.reduce((acc, item) => acc + item.dishTotalPrice, 0)

  return (
    <Stack sx={{ height: '100%' }}>
      <DetailsListTitle title="Order details" orderNumber={orderId} />
      <div ref={containerRef} style={{ overflowY: 'auto', flex: 1 }}>
        <Box style={{ height: '200px' }}>
          {orderItems.map(({ dishID, title, picture, dishTotalPrice }) => (
            <OrderDetailsItem
              key={dishID}
              id={dishID}
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
          Update Order
        </Button>
      </Stack>
    </Stack>
  )
}

export default OrderInfoList
