import { NewOrderType } from 'store/reducers/order.slice'
import { OrderFormedType } from 'types/OrderFormedType'

export const toggleMenuValues = [
  { label: 'Order info', value: 'orderInfo' },
  { label: 'Dishes', value: 'dishes' },
]

export const unique = () => {
  return Math.floor(Math.random() * 9000) + 1000
}

export const getFormedOrder = (order: NewOrderType): OrderFormedType => {
  const { orderType, orderNumber, table, description, dishes } = order

  const filteredDishes = dishes.map(({ id, amount, dishTotalPrice }) => ({
    dishID: id,
    amount,
    dishTotalPrice,
  }))

  const totalPrice = filteredDishes.reduce((acc, { dishTotalPrice }) => acc + dishTotalPrice, 0)
  const totalPriseWithTax = Math.round(totalPrice * 1.1)

  return {
    description,
    orderNumber,
    orderType,
    table: table || '-',
    totalPrice: totalPriseWithTax,
    dishes: filteredDishes,
  }
}
