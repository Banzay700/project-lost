import { CSSProperties, FC } from 'react'
import { Stack, Typography } from '@mui/material'

interface OrderSummaryProps {
  value: string
  text: string
  direction?: 'row' | 'column' | 'column-reverse' | 'row-reverse'
  variant?: 'h1' | 'h2' | 'h3' | 'subtitle1' | 'subtitle2' | 'caption' | 'dashNumb'
  color?: 'primary' | 'secondary'
  justifyContent?: CSSProperties['justifyContent']
}

const OrderSummary: FC<OrderSummaryProps> = ({
  value,
  direction,
  text,
  variant,
  color,
  justifyContent,
}) => {
  return (
    <Stack
      direction={direction || 'row'}
      sx={{ justifyContent: justifyContent || 'space-between' }}>
      <Typography variant={variant || 'h3'}>{text}</Typography>
      <Typography variant={variant || 'h3'} color={color || 'secondary'}>
        {value}
      </Typography>
    </Stack>
  )
}

export default OrderSummary
