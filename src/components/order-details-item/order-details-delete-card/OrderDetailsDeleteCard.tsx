import { FC } from 'react'
import { Stack, Typography } from '@mui/material'

import { IconCheck, IconCross } from 'assets/index'
import { useOrderReducer } from 'hooks/index'

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
          <IconCheck style={{ width: '35px', height: '35px' }} />
        </Stack>
        <Stack
          onClick={handleCancelRemoveDish}
          sx={{ cursor: 'pointer', '&:hover': { color: '#ff5c00' } }}>
          <IconCross style={{ width: '35px', height: '35px' }} />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default OrderDetailsDeleteCard
