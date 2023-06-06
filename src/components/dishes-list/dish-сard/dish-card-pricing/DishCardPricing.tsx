import { CardContent, Typography, Stack } from '@mui/material'
import { FC } from 'react'
import { Button } from 'UI/index'
import { IconPlus } from 'assets/index'
import { useActiveOrderStatus } from 'hooks/index'
import { FadeIn } from 'utils/index'

interface DishCardPricingProps {
  price: number
  onClickButton?: () => void
}

const DishCardPricing: FC<DishCardPricingProps> = ({ price, onClickButton }) => {
  const { isDishButton } = useActiveOrderStatus()

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
      {isDishButton && (
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
