import { FC, useState } from 'react'
import { Box, Stack } from '@mui/material'

import { OrderSummaryWrapper, OrderDetailsItem, OrderCancellationModal } from 'components'
import { Button, DetailsListTitle } from 'UI'
import { convertOrderData, TAX } from 'utils'
import { Icon } from 'assets'
import { useOrderReducer, useSmoothScrollbar } from 'hooks'
import { useUpdateTableStatusMutation, useUpdateOrderMutation } from 'store/api'
import { DetailsList, DetailsListActionsWrapper, InfoListWrapper } from './OrderInfoList.styled'

interface OrderListProps {
  onClick?: () => void
}

const OrderInfoList: FC<OrderListProps> = ({ onClick }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const { activeOrder, clearNewOrderState } = useOrderReducer()
  const { orderDB } = convertOrderData(activeOrder)
  const [closeOrder] = useUpdateOrderMutation()
  const [updateTableStatus] = useUpdateTableStatusMutation()
  const containerRef = useSmoothScrollbar<HTMLDivElement>()
  const { id, table, orderNumber, dishes, orderType } = activeOrder
  const total = dishes.reduce((acc, item) => acc + item.dishTotalPrice, 0)

  const handleToggleModal = () => setModalOpen((prev) => !prev)

  const handleDeleteOrder = async () => {
    if (!id) return

    await closeOrder({ ...orderDB, status: 'cancel' })
    if (orderType === 'dineIn') updateTableStatus(table)

    clearNewOrderState()
    handleToggleModal()
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
            onClick={handleToggleModal}
            disabled={!id}>
            Cancel Order
          </Button>
        </Stack>
      </DetailsListActionsWrapper>
      <OrderCancellationModal
        open={modalOpen}
        onToggleView={handleToggleModal}
        onConfirm={handleDeleteOrder}
        titleModal="Сonfirmation of order deletion"
        messageModal={`Are you sure you want to cancel order #${orderNumber}?`}
      />
    </InfoListWrapper>
  )
}

export default OrderInfoList
