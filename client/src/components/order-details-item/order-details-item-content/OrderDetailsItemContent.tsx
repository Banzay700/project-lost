import { FC } from 'react'
import { Stack } from '@mui/material'

import { Picker } from 'UI'
import { useOrderReducer } from 'hooks'
import { OrderDetailsItemMedia } from './order-details-item-media'
import { OrderDetailsItemTitle } from './order-details-item-title'
import { OrderDetailsItemPriceInfo } from './order-details-item-price-info'

interface OrderDetailsItemContentProps {
  id: string
  title: string | undefined
  src: string | undefined
  total: number | undefined
  amount?: number
  handleDeleteCard: (value: boolean) => void
}

const OrderDetailsItemContent: FC<OrderDetailsItemContentProps> = (props) => {
  const { id, title, src, total, amount, handleDeleteCard } = props
  const { changeDishAmount } = useOrderReducer()
  const initialPrice = (total || 0) / (amount || 0)

  const handleChangeOrderInfo = (value: number) => {
    changeDishAmount({ id, amount: value })
  }

  return (
    <>
      <OrderDetailsItemMedia src={src} alt={title} />
      <Stack sx={{ justifyContent: 'space-between', width: '100%' }}>
        <OrderDetailsItemTitle title={title} />
        <OrderDetailsItemPriceInfo amount={amount} price={initialPrice} totalPriceItem={total}>
          <Picker
            initialValue={amount}
            onChange={handleChangeOrderInfo}
            handleDeleteCard={handleDeleteCard}
          />
        </OrderDetailsItemPriceInfo>
      </Stack>
    </>
  )
}

export default OrderDetailsItemContent
