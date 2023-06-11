import { FC } from 'react'
import { Stack, Typography } from '@mui/material'

import { Icon } from 'assets'
import { useOrderReducer } from 'hooks'

interface OrderDetailsDeleteCardProps {
  id: string
  handleDeleteCard: (value: boolean) => void
}

const OrderDetailsDeleteCard: FC<OrderDetailsDeleteCardProps> = ({ id, handleDeleteCard }) => {
  const { removeDish } = useOrderReducer()

  const handleRemoveDish = () => removeDish(id)
  const handleCancelRemoveDish = () => handleDeleteCard(false)

  return (
    <Stack sx={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, p: '10px' }}>
      <Typography align="center">Remove this meal</Typography>
      <Typography align="center">from order?</Typography>
      <Stack sx={{ flexDirection: 'row', justifyContent: 'space-around', height: '100%' }}>
        <Stack
          onClick={handleRemoveDish}
          sx={{ cursor: 'pointer', '&:hover': { color: '#ff5c00' } }}>
          <Icon.Check style={{ width: '35px', height: '35px' }} />
        </Stack>
        <Stack
          onClick={handleCancelRemoveDish}
          sx={{ cursor: 'pointer', '&:hover': { color: '#ff5c00' } }}>
          <Icon.Cross style={{ width: '35px', height: '35px' }} />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default OrderDetailsDeleteCard
