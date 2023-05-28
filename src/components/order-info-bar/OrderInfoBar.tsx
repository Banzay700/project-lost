import { FC, useState } from 'react'
import { Stack } from '@mui/material'
import { ToggleMenu } from 'UI'
import { ORDER_TOGGLE_MENU_VALUES } from 'utils'
import { useNewOrderReducer } from 'hooks'
import { ROUTES } from 'routes'
import { OrderInfoList } from './order-info-list'
import { useNavigate } from 'react-router-dom'
import { useGetOrderQuery } from 'store/api'

const OrderInfoBar: FC = () => {
  const [toggleValue, setToggleValue] = useState<string>('dishes')
  const [buttonDisabled] = useState(false)
  const navigate = useNavigate()
  // ///////////////////////////
  const ACTIVE_ORDER_MOCK = {
    orderType: 'delivery',
    table: '-',
    orderNumber: 4902,
    dishes: [
      {
        dishID: '645a8c14bdac7211baf9aa10',
        amount: 1,
        dishTotalPrice: 279,
        _id: '6471fd35e3a337ecbc735a4c',
        title: 'Carbonara',
        price: 279,
        picture:
          'https://res.cloudinary.com/dz5jl6tzt/image/upload/v1684930527/Ribs-on-the-grill_o3emwq.jpg',
      },
      {
        dishID: '645a8c14bdac7211baf9aa08',
        amount: 1,
        dishTotalPrice: 299,
        _id: '6471fd35e3a337ecbc735a4d',
        title: 'Super meaty',
        price: 299,
        picture:
          'https://res.cloudinary.com/dz5jl6tzt/image/upload/v1684927674/tandem-set_jboroj.jpg',
      },
    ],
    totalPrice: 324234,
    createdAt: '2023-05-27T12:53:09.469Z',
    updatedAt: '2023-05-27T12:53:09.469Z',
    id: '6471fd35e3a337ecbc735a4b',
  }

  const ACTIVE_ORDER_DISHES_LIST_MOCK = [
    {
      dishID: '645a8c14bdac7211baf9aa08',
      amount: 1,
      dishTotalPrice: 299,
      id: '6471fd35e3a337ecbc735a4d',
      title: 'Super meaty',
      price: 299,
      picture:
        'https://res.cloudinary.com/dz5jl6tzt/image/upload/v1684927674/tandem-set_jboroj.jpg',
    },
    {
      dishID: '645a8c14bdac7211baf9aa10',
      amount: 1,
      dishTotalPrice: 279,
      id: '6471fd35e3a337ecbc735a4c',
      title: 'Carbonara',
      price: 279,
      picture:
        'https://res.cloudinary.com/dz5jl6tzt/image/upload/v1684927674/tandem-set_jboroj.jpg',
    },
  ]

  const handleUpdateOrder = () => {
    //   POST ACTIVE ORDER TO HOME PAGE FOR UPDATE
    // createNewOrder(ACTIVE_ORDER_MOCK)
    navigate(ROUTES.DISHES)
  }
  const { activeOrder } = useNewOrderReducer()

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
      {toggleValue === 'dishes' && (
        <OrderInfoList
          orderItems={activeOrder.dishes}
          orderId={activeOrder.orderNumber}
          onClick={handleUpdateOrder}
        />
      )}
    </Stack>
  )
}

export default OrderInfoBar
