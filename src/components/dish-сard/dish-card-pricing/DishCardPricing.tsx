import { CardContent, Typography, Stack } from '@mui/material'
import { FC } from 'react'
import { Button } from 'UI'
import { IconPlus } from 'assets/icons'

interface DishCardPricingProps {
  price: number
  isHovered: boolean
  onClickButton?: () => void
}

const DishCardPricing: FC<DishCardPricingProps> = ({ price, isHovered, onClickButton }) => {
  const positionText = isHovered ? 'space-between' : 'center'

  return (
    <CardContent
      sx={{
        padding: 0,
        display: 'flex',
        justifyContent: positionText,
        alignItems: 'center',
        ':last-child': { p: 0 },
      }}>
      <Stack spacing="2px">
        {isHovered && (
          <Typography variant="subtitle1" component="p" fontWeight={400}>
            Price
          </Typography>
        )}
        <Typography component="p" variant="h2" color="primary" fontWeight={600}>
          $ {price}
        </Typography>
      </Stack>
      {isHovered && (
        <Button
          variant="contained"
          size="small"
          color="secondary"
          icon={<IconPlus />}
          onClick={onClickButton}
        />
      )}
    </CardContent>
  )
}

export default DishCardPricing
