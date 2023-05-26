import { NewlyOrderType } from 'store/reducers/newlyCreatedOrder.slice'

export const toggleMenuValues = [
  { label: 'Order info', value: 'orderInfo' },
  { label: 'Dishes', value: 'dishes' },
]

export const unique = () => {
  return Math.floor(Math.random() * 9000) + 1000
}

export const preparedData = (order: NewlyOrderType) => {
  const { orderType, orderNumber, table, description, dishes } = order
  const filteredDishes = dishes.map(({ id, amount, totalPrice }) => ({
    dishID: id,
    amount,
    totalPrice,
  }))

  return {
    orderType,
    dishes: filteredDishes,
    description,
    table: table || '-',
    orderNumber,
  }
}
