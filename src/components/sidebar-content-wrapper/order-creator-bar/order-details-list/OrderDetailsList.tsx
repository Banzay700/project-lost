import { FC } from 'react'
import { Box, Stack } from '@mui/material'

import { OrderSummary } from 'components/index'
import { Button, DetailsListTitle } from 'UI/index'
import { FadeIn } from 'utils/index'
import { useSmoothScrollbar, useOrderReducer } from 'hooks/index'
import { OrderDetailsItem } from './order-details-item'

interface OrderListProps {
  isPicker?: boolean
  onClick?: () => void
}

const OrderDetailsList: FC<OrderListProps> = ({ isPicker, onClick }) => {
  const { activeOrder } = useOrderReducer()
  const containerRef = useSmoothScrollbar<HTMLDivElement>()
  const total = activeOrder.dishes.reduce((acc, item) => acc + item.dishTotalPrice, 0)

  return (
    <FadeIn styles={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <DetailsListTitle title="Order details" orderNumber={activeOrder.orderNumber} />
      <div ref={containerRef} style={{ overflowY: 'auto', flex: 1 }}>
        <Box style={{ height: '200px' }}>
          {activeOrder.dishes.map(({ dishID, title, picture, dishTotalPrice, amount }) => (
            <OrderDetailsItem
              key={dishID}
              id={dishID}
              title={title}
              total={dishTotalPrice}
              src={picture}
              amount={amount}
              isPicker={isPicker}
            />
          ))}
        </Box>
      </div>
      <Stack sx={{ gap: '24px', p: '18px 16px', borderTop: '1px solid #e4e4e4' }}>
        <OrderSummary tax={10} total={total} />
        <Button variant="contained" size="default" type="submit" fullWidth onClick={onClick}>
          {activeOrder.storeStatus === 'update' ? 'Update order' : 'Create New Order'}
        </Button>
      </Stack>
    </FadeIn>
  )
}

export default OrderDetailsList
