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

  const dataDishes = dishes.map(({ id, amount, dishTotalPrice }) => ({
    dishID: id,
    amount,
    dishTotalPrice,
  }))
  const activeDishes = dishes.map(({ id, amount, dishTotalPrice, title, picture }) => ({
    dishID: id,
    amount,
    dishTotalPrice,
    picture,
    title,
  }))
  const totalPrice = dataDishes.reduce((acc, { dishTotalPrice }) => acc + dishTotalPrice, 0)
  const totalPriseWithTax = Math.round(totalPrice * 1.1)

  return [
    {
      description,
      orderNumber,
      orderType,
      table: table || '-',
      totalPrice: totalPriseWithTax,
      dishes: dataDishes,
    },
    {
      description,
      orderNumber,
      orderType,
      table: table || '-',
      totalPrice: totalPriseWithTax,
      dishes: activeDishes,
    },
  ]
}
