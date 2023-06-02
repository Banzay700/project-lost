import { FC, useState } from 'react'
import { Stack } from '@mui/material'
import { ToggleMenu } from 'UI/index'
import { ORDER_TOGGLE_MENU_VALUES } from 'utils/index'
import { useOrderReducer } from 'hooks/index'
import { ROUTES } from 'routes/index'
import { useNavigate } from 'react-router-dom'
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
      {toggleValue === 'dishes' && <OrderInfoList onClick={handleUpdateOrder} />}
    </Stack>
  )
}

export default OrderInfoBar
