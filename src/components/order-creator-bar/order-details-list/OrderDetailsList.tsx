import { FC } from 'react'
import { Box, Stack } from '@mui/material'
import { OrderSummary } from 'components/index'
import { Button, DetailsListTitle } from 'UI/index'
import { IDishes } from 'types/IOrder'
import { OrderDetailsItem } from './order-details-item'
import s from './OrderDetailsList.module.scss'
import { useSmoothScrollbar } from 'hooks/useSmoothScrollbar.hook'

interface OrderListProps {
  orderItems: IDishes[]
  isPicker?: boolean
  orderId: number
  onClick?: () => void
}

const OrderDetailsList: FC<OrderListProps> = ({ orderItems, isPicker, orderId, onClick }) => {
  const containerRef = useSmoothScrollbar<HTMLDivElement>()
  const total = orderItems.reduce((acc, item) => acc + item.dishTotalPrice, 0)

  return (
    <Stack sx={{ height: '100%' }}>
      <DetailsListTitle title="Order details" orderId={orderId} />
      <div ref={containerRef} style={{ overflowY: 'auto', flex: 1 }}>
        <Box style={{ height: '200px' }}>
          {orderItems.map(({ id, title, picture, dishTotalPrice }) => (
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
          Create New Order
        </Button>
      </Stack>
    </Stack>
  )
}

export default OrderDetailsList
