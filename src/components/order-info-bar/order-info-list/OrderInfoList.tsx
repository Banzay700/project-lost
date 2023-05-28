import { FC } from 'react'
import { Box, Stack } from '@mui/material'
import { OrderSummary } from 'components/index'
import { Button, DetailsListTitle } from 'UI/index'

import { useSmoothScrollbar } from 'hooks/useSmoothScrollbar.hook'
import { OrderDetailsItem } from 'components/order-creator-bar/order-details-list/order-details-item'
import { DishActiveType } from 'types/COMMON_TYPES'

// TODO: check this type
type OrderItemsType = {
  dishID: string
  amount: number
  dishTotalPrice: number
  id: string
  title: string
  price: number
  picture: string
}

interface OrderListProps {
  orderItems: DishActiveType[]
  isPicker?: boolean
  orderId: number
  onClick?: () => void
}

const OrderInfoList: FC<OrderListProps> = ({ orderItems, isPicker, orderId, onClick }) => {
  const containerRef = useSmoothScrollbar<HTMLDivElement>()
  const total = orderItems.reduce((acc, item) => acc + item.dishTotalPrice, 0)

  return (
    <Stack sx={{ height: '100%' }}>
      <DetailsListTitle title="Order details" orderId={orderId} />
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
