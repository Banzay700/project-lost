import { FC } from 'react'
import { CardContent, Typography } from '@mui/material'
import { IconCross } from 'assets'
import { theme } from 'theme'
import { useOrderReducer } from 'hooks'

interface CardItemTitleProps {
  title: string
  dishID: string
}

const OrderDetailsItemTitle: FC<CardItemTitleProps> = ({ title, dishID }) => {
  const { removeDish } = useOrderReducer()

  const handleRemoveDishInOrder = () => {
    removeDish(dishID)
  }
  return (
    <CardContent sx={{ flex: '1 0 auto', p: 0, display: 'flex' }}>
      <Typography variant="h2" component="h3" color="secondary" fontWeight="600" flexGrow={1}>
        {title}
      </Typography>
      <IconCross
        color={theme.palette.primary.main}
        onClick={handleRemoveDishInOrder}
        style={{ cursor: 'pointer' }}
      />
    </CardContent>
  )
}

export default OrderDetailsItemTitle
