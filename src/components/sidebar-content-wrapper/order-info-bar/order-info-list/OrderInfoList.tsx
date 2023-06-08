import { FC } from 'react'
import { Box, Stack } from '@mui/material'

import { OrderSummary } from 'components'
import { Button, DetailsListTitle } from 'UI'
import { FadeIn } from 'utils'
import { useOrderReducer, useSmoothScrollbar } from 'hooks'
import { OrderDetailsItem } from 'components/sidebar-content-wrapper/order-creator-bar/order-details-list/order-details-item'
import { useDeleteOrderMutation } from 'store/api/order.api'
import { useUpdateTableStatusMutation } from 'store/api'

interface OrderListProps {
  onClick?: () => void
}

const OrderInfoList: FC<OrderListProps> = ({ onClick }) => {
  const { activeOrder, clearNewOrderState } = useOrderReducer()
  const [deleteOrder] = useDeleteOrderMutation()
  const [updateTableStatus] = useUpdateTableStatusMutation()
  const containerRef = useSmoothScrollbar<HTMLDivElement>()
  const total = activeOrder.dishes.reduce((acc, item) => acc + item.dishTotalPrice, 0)

  const handleDeleteOrder = async () => {
    if (!activeOrder.id) return
    await deleteOrder(activeOrder.id)
    updateTableStatus(activeOrder.table)
    clearNewOrderState()
  }

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
              amount={amount}
              total={dishTotalPrice}
              src={picture}
            />
          ))}
        </Box>
      </div>
      <Stack sx={{ gap: '24px', p: '18px 16px', borderTop: '1px solid #e4e4e4' }}>
        <OrderSummary tax={10} total={total} />
        <Stack direction="row" spacing={2.5}>
          <Button variant="contained" size="default" type="submit" fullWidth onClick={onClick}>
            Update Order
          </Button>
          <Button
            variant="outlined"
            size="default"
            type="submit"
            fullWidth
            onClick={handleDeleteOrder}
            disabled={!activeOrder.id}>
            Reject Order
          </Button>
        </Stack>
      </Stack>
    </FadeIn>
  )
}

export default OrderInfoList
