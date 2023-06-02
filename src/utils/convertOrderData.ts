import { OrderActiveType, OrderRequestType } from 'types/OrderBillsType'

type ConvertOrderDataType = {
  orderDB: OrderRequestType
  orderActive: OrderActiveType
}

export const convertOrderData = (order: OrderActiveType): ConvertOrderDataType => {
  const { orderType, orderNumber, table, description, dishes, id } = order

  const dataDishes = dishes.map(({ dishID, amount, dishTotalPrice }) => ({
    dishID,
    amount,
    dishTotalPrice,
  }))

  const activeDishes = dishes.map(({ dishID, amount, dishTotalPrice, title, picture, price }) => ({
    dishID,
    amount,
    dishTotalPrice,
    picture,
    price,
    title,
  }))

  const totalPrice = dataDishes.reduce((acc, { dishTotalPrice }) => acc + dishTotalPrice, 0)
  const totalPriseWithTax = Math.round(totalPrice * 1.1)

  const commonReturnValues = {
    id,
    orderType,
    table: table || '-',
    orderNumber,
    totalPrice: totalPriseWithTax,
    description,
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
