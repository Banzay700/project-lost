import { Typography } from '@mui/material'
import { Icon } from 'assets'
import { FC } from 'react'
import { calculateTotalPriceWithTax, TAX } from 'utils'
import {
  PaymentMethod,
  PaymentMethodWrapper,
  TotalPrice,
  TotalPriceInfoWrapper,
} from './TotalPriceInfo.styled'

interface TotalPriceInfoProps {
  paymentMethod?: string
  totalPrice?: number
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
          {totalPrice && (
            <Typography variant="subtitle1" component="p">
              $ {calculateTotalPriceWithTax(totalPrice, TAX).totalValue}
            </Typography>
          )}
        </TotalPrice>
      </PaymentMethodWrapper>
    </TotalPriceInfoWrapper>
  )
}

export default TotalPriceInfo
