import { OrderActiveType, OrderDishActiveType, OrderDishRequestType, OrderRequestType } from 'types'

type ConvertOrderDataType = {
  orderDB: OrderRequestType
  orderActive: OrderActiveType
}

const convertActiveDishes = (dishes: OrderDishActiveType[]) => {
  return dishes.map(({ dishID, amount, dishTotalPrice, title, picture, price }) => ({
    dishID,
    amount,
    dishTotalPrice,
    picture,
    price,
    title,
  }))
}

const convertRequestDishes = (dishes: OrderDishRequestType[]) => {
  return dishes.map(({ dishID, amount, dishTotalPrice }) => ({
    dishID,
    amount,
    dishTotalPrice,
  }))
}

export const convertOrderData = (order: OrderActiveType): ConvertOrderDataType => {
  const { orderType, orderNumber, table, description, dishes, id, user } = order
  const dataDishes = convertRequestDishes(dishes)
  const activeDishes = convertActiveDishes(dishes)
  const totalPrice = dataDishes.reduce((acc, { dishTotalPrice }) => acc + dishTotalPrice, 0)
  const totalPriseWithTax = Math.round(totalPrice * 1.1)

  const commonReturnValues = {
    id,
    orderType,
    table: table || '-',
    orderNumber,
    totalPrice: totalPriseWithTax,
    description,
    user,
  }
  return {
    orderDB: { dishes: dataDishes, ...commonReturnValues },
    orderActive: {
      dishes: activeDishes,
      storeStatus: 'closed',
      ...commonReturnValues,
    } as OrderActiveType,
  }
}
