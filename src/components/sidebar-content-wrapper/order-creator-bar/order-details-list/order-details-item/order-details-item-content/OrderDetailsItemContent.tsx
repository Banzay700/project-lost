import { FC } from 'react'
import { Stack, Typography } from '@mui/material'

import { Picker } from 'UI'
import { useOrderReducer } from 'hooks'
import { OrderDetailsItemMedia } from '../order-details-item-media'
import { OrderDetailsItemTitle } from '../order-details-item-title'
import { OrderDetailsItemPriceInfo } from '../order-details-item-price-info'

interface OrderDetailsItemContentProps {
  id: string
  title: string
  src: string
  total: number
  amount?: number
  handleDeleteCard: (value: boolean) => void
}

const OrderDetailsItemContent: FC<OrderDetailsItemContentProps> = (props) => {
  const { id, title, src, total, amount, handleDeleteCard } = props
  const { changeDishAmount } = useOrderReducer()
  const initialPrice = total / (amount || 0)

  const handleChangeOrderInfo = (value: number) => {
    changeDishAmount({ id, amount: value })
  }

  return (
    <>
      <OrderDetailsItemMedia src={src} alt={title} />
      <Stack sx={{ justifyContent: 'space-between', width: '100%' }}>
        <OrderDetailsItemTitle title={title} />
        <OrderDetailsItemPriceInfo totalPriceItem={total}>
          <Picker
            initialValue={amount}
            onChange={handleChangeOrderInfo}
            handleDeleteCard={handleDeleteCard}
          />
        </OrderDetailsItemPriceInfo>
        <Typography variant="h3">
          {amount}x{initialPrice}$
        </Typography>
      </Stack>
    </>
  )
}

export default OrderDetailsItemContent
