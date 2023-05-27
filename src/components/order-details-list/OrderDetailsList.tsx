import { FC } from 'react'
import { Box, Stack, useScrollTrigger } from '@mui/material'
import { OrderSummary } from 'components'
import { Button, DetailsListTitle } from 'UI'
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
  const total = orderItems.reduce((acc, item) => acc + item.totalPrice, 0)

  return (
    <Stack sx={{ height: '100%' }}>
      <DetailsListTitle title="Order details" orderId={orderId} />
      <div ref={containerRef} style={{ overflowY: 'auto', flex: 1 }}>
        <Box style={{ height: '200px' }}>
          {orderItems.map(({ id, title, src, totalPrice }) => (
            <OrderDetailsItem
              key={id}
              id={id}
              title={title}
              total={totalPrice}
              src={src}
              isPicker={isPicker}
            />
          ))}
        </Box>
      </div>
      <Stack sx={{ gap: '24px', p: '18px 16px', borderTop: '1px solid #e4e4e4' }}>
        <OrderSummary tax={10} total={total} />
        <Button variant="contained" size="default" type="submit" fullWidth onClick={onClick}>
          Submit
        </Button>
      </Stack>
    </Stack>
  )
}

export default OrderDetailsList
