import { FC } from 'react'
import { Box, Stack } from '@mui/material'

import { OrderSummaryWrapper, OrderDetailsItem } from 'components'
import { Button, DetailsListTitle } from 'UI'
import { TAX } from 'utils'
import { useOrderReducer, useSmoothScrollbar } from 'hooks'
import { useUpdateTableStatusMutation, useDeleteOrderMutation } from 'store/api'
import { Icon } from 'assets'
import { DetailsList, DetailsListActionsWrapper, InfoListWrapper } from './OrderInfoList.styled'

interface OrderListProps {
  onClick?: () => void
}

const OrderInfoList: FC<OrderListProps> = ({ onClick }) => {
  const { activeOrder, clearNewOrderState } = useOrderReducer()
  const [deleteOrder] = useDeleteOrderMutation()
  const [updateTableStatus] = useUpdateTableStatusMutation()
  const containerRef = useSmoothScrollbar<HTMLDivElement>()
  const { id, table, orderNumber, dishes } = activeOrder
  const total = dishes.reduce((acc, item) => acc + item.dishTotalPrice, 0)

  const handleDeleteOrder = async () => {
    if (!id) return
    await deleteOrder(id)
    updateTableStatus(table)
    clearNewOrderState()
  }

  return (
    <InfoListWrapper>
      <DetailsListTitle title="Order details" orderNumber={orderNumber} />
      <DetailsList ref={containerRef}>
        <Box style={{ height: '200px' }}>
          {dishes.map(({ dishID, title, picture, dishTotalPrice, amount }) => (
            <OrderDetailsItem
              key={dishID}
              id={dishID}
              title={title}
              amount={amount}
              total={dishTotalPrice}
              src={picture}
            />
          ))}
          {!dishes.length && (
            <Stack width="100%" sx={{ marginTop: '20px' }} alignItems="center">
              <Icon.NotDataFound style={{ transform: 'scale(0.5)' }} />
            </Stack>
          )}
        </Box>
      </DetailsList>
      <DetailsListActionsWrapper>
        <OrderSummaryWrapper tax={TAX} total={total} />
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
            disabled={!id}>
            Cancel Order
          </Button>
        </Stack>
      </DetailsListActionsWrapper>
    </InfoListWrapper>
  )
}

export default OrderInfoList
