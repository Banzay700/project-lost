import { FC, useState } from 'react'
import { Box, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ToggleMenu } from 'UI'
import { ROUTES } from 'routes'
import { useOrderReducer } from 'hooks'
import { ORDER_TOGGLE_MENU_VALUES } from 'utils'
import { OrderInfoList } from './order-info-list'

const OrderInfoBar: FC = () => {
  const [toggleValue, setToggleValue] = useState<string>('dishes')
  const [buttonDisabled] = useState(false)
  const navigate = useNavigate()
  const { switchOrderStatus } = useOrderReducer()

  const handleUpdateOrder = () => {
    switchOrderStatus('update')
    navigate(ROUTES.DISHES)
  }

  const handleToggleChange = (value: string) => {
    setToggleValue(value)
  }

  return (
    <Stack flex="1" height="100%">
      <ToggleMenu
        menuItems={ORDER_TOGGLE_MENU_VALUES}
        onChange={handleToggleChange}
        defaultValue={toggleValue}
        buttonDisabled={buttonDisabled}
      />
      <Box sx={{ height: 'calc(100% - 70px)' }}>
        {toggleValue === 'dishes' && <OrderInfoList onClick={handleUpdateOrder} />}
      </Box>
    </Stack>
  )
}

export default OrderInfoBar
