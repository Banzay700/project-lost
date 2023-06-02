import { CardContent, Typography, Stack } from '@mui/material'
import { FC } from 'react'
import { Button } from 'UI'
import { IconPlus } from 'assets'
import { useOrderReducer } from 'hooks'
import { FadeIn } from 'utils'

interface DishCardPricingProps {
  price: number
  onClickButton?: () => void
}

const DishCardPricing: FC<DishCardPricingProps> = ({ price, onClickButton }) => {
  const { activeOrder } = useOrderReducer()

  const isButton =
    activeOrder.storeStatus !== 'none' || activeOrder.storeStatus === ('update' as string)
  return (
    <CardContent
      sx={{
        padding: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        ':last-child': { p: 0 },
      }}>
      <Stack spacing="2px">
        <Typography variant="subtitle1" component="p" fontWeight={400}>
          Price
        </Typography>
        <Typography component="p" variant="h2" color="primary" fontWeight={600}>
          $ {price}
        </Typography>
      </Stack>
      {isButton && (
        <FadeIn>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            disableRipple={false}
            icon={<IconPlus />}
            onClick={onClickButton}
          />
        </FadeIn>
      )}
    </CardContent>
  )
}

export default DishCardPricing
