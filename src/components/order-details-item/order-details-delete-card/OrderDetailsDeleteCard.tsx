import { FC } from 'react'
import { Typography } from '@mui/material'

import { Icon } from 'assets'
import { useOrderReducer } from 'hooks'
import {
  DeleteCardWrapper,
  DeleteCartIcon,
  DeleteIconsGrope,
} from './OrderDetailsDeleteCard.styled'

interface OrderDetailsDeleteCardProps {
  id: string
  handleDeleteCard: (value: boolean) => void
}

const OrderDetailsDeleteCard: FC<OrderDetailsDeleteCardProps> = ({ id, handleDeleteCard }) => {
  const { removeDish } = useOrderReducer()
  const handleRemoveDish = () => removeDish(id)
  const handleCancelRemoveDish = () => handleDeleteCard(false)

  return (
    <DeleteCardWrapper>
      <Typography align="center">Remove this meal</Typography>
      <Typography align="center">from order?</Typography>
      <DeleteIconsGrope>
        <DeleteCartIcon onClick={handleRemoveDish}>
          <Icon.Check style={{ width: '35px', height: '35px' }} />
        </DeleteCartIcon>
        <DeleteCartIcon onClick={handleCancelRemoveDish}>
          <Icon.Cross style={{ width: '35px', height: '35px' }} />
        </DeleteCartIcon>
      </DeleteIconsGrope>
    </DeleteCardWrapper>
  )
}

export default OrderDetailsDeleteCard
