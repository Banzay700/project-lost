import { FC } from 'react'
import { Box, Stack } from '@mui/material'

import { OrderSummaryWrapper } from 'components'
import { Button, DetailsListTitle } from 'UI'
import { FadeIn } from 'utils'
import { useOrderReducer, useSmoothScrollbar, useUserReducer } from 'hooks'
import { OrderDetailsItem } from 'components/order-details-item'
import { useDeleteOrderMutation } from 'store/api/order.api'
import { useUpdateTableStatusMutation } from 'store/api'

interface OrderListProps {
  onClick?: () => void
}

const OrderInfoList: FC<OrderListProps> = ({ onClick }) => {
  const { userState } = useUserReducer()
  const { activeOrder, clearNewOrderState } = useOrderReducer()
  const [deleteOrder] = useDeleteOrderMutation()
  const [updateTableStatus] = useUpdateTableStatusMutation()
  const containerRef = useSmoothScrollbar<HTMLDivElement>()
  const total = activeOrder.dishes.reduce((acc, item) => acc + item.dishTotalPrice, 0)
  const { firstName, secondName } = userState
  const handleDeleteOrder = async () => {
    if (!activeOrder.id) return
    await deleteOrder(activeOrder.id)
    updateTableStatus(activeOrder.table)
    clearNewOrderState()
  }

  return (
    <FadeIn styles={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <DetailsListTitle
        title="Order details"
        orderNumber={activeOrder.orderNumber}
        staffName={firstName}
        staffSurname={secondName}
      />
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
        <OrderSummaryWrapper tax={10} total={total} />
        <Stack direction="row" spacing={2.5}>
          <Button variant="contained" size="medium" type="submit" fullWidth onClick={onClick}>
            Update Order
          </Button>
          <Button
            variant="outlined"
            size="medium"
            type="submit"
            fullWidth
            onClick={handleDeleteOrder}
            disabled={!activeOrder.id}>
            Cancel Order
          </Button>
        </Stack>
      </Stack>
    </FadeIn>
  )
}

export default OrderInfoList
