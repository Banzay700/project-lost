import { FC, ReactNode } from 'react'
import { Stack } from '@mui/material'

import { OrderDetailsItemMedia } from '../order-details-item-media'
import { OrderDetailsItemTitle } from '../order-details-item-title'
import { OrderDetailsItemPriceInfo } from '../order-details-item-price-info'

interface OrderDetailsItemContentProps {
  title: string
  src: string
  total: number
  children?: ReactNode
}

const OrderDetailsItemContent: FC<OrderDetailsItemContentProps> = (props) => {
  const { title, src, total, children } = props
  return (
    <>
      <OrderDetailsItemMedia src={src} alt={title} />
      <Stack sx={{ justifyContent: 'space-between', width: '100%' }}>
        <OrderDetailsItemTitle title={title} />
        <OrderDetailsItemPriceInfo totalPriceItem={total}>{children}</OrderDetailsItemPriceInfo>
      </Stack>
    </>
  )
}

export default OrderDetailsItemContent
