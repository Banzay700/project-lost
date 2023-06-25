import { FC, PropsWithChildren, ReactNode } from 'react'
import { Typography } from '@mui/material'

import { useRootLocationPath } from 'hooks'
import { CardContentWrapper, CardTextWrapper } from './OrderDetailsItemPriceInfo.styled'

interface OrderItemPriceInfoProps extends PropsWithChildren {
  totalPriceItem: number | undefined
  amount?: number
  price?: number
  children?: ReactNode
}

const OrderDetailsItemPriceInfo: FC<OrderItemPriceInfoProps> = (props) => {
  const { totalPriceItem, amount, price, children } = props
  const { isHomeLocation } = useRootLocationPath()

  let textContent

  if (isHomeLocation) {
    textContent = 'Price'
  } else {
    textContent = `Price $${price} x ${amount}`
  }

  return (
    <CardContentWrapper>
      <CardTextWrapper isHomeLocation={isHomeLocation}>
        <Typography variant="h3" fontWeight="400">
          {textContent}
        </Typography>
        <Typography variant="h2" fontWeight="600" color="primary">
          $ {totalPriceItem}
        </Typography>
      </CardTextWrapper>
      {children}
    </CardContentWrapper>
  )
}

export default OrderDetailsItemPriceInfo
