import { FC, PropsWithChildren, ReactNode } from 'react'
import { Typography, useMediaQuery, useTheme } from '@mui/material'

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
  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('sm'))
  const textContent = isMobile || !isHomeLocation ? `Price $${price} x ${amount}` : 'Price'

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
