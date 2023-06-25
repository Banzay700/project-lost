import { Typography } from '@mui/material'
import { Icon } from 'assets'
import { FC } from 'react'
import {
  PaymentMethod,
  PaymentMethodWrapper,
  TotalPrice,
  TotalPriceInfoWrapper,
} from './TotalPriceInfo.styled'

interface TotalPriceInfoProps {
  paymentMethod: string
  totalPrice: string | number
}

const TotalPriceInfo: FC<TotalPriceInfoProps> = ({ paymentMethod, totalPrice }) => {
  return (
    <TotalPriceInfoWrapper>
      <Icon.Money />
      <PaymentMethodWrapper>
        <PaymentMethod>
          <Typography variant="subtitle1" component="p">
            {paymentMethod}
          </Typography>
        </PaymentMethod>
        <TotalPrice>
          <Typography variant="subtitle1" component="p">
            $ {totalPrice}
          </Typography>
        </TotalPrice>
      </PaymentMethodWrapper>
    </TotalPriceInfoWrapper>
  )
}

export default TotalPriceInfo
