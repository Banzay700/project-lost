import { OrderType } from 'types'

export const prepareBillsData = (element: OrderType) => {
  const { id, dishes, totalPrice } = element
  const modifiedData = dishes?.map(({ dishID, dishTotalPrice, amount }) => {
    return {
      dishID,
      amount,
      price: dishTotalPrice,
    }
  })
  return {
    orderID: id,
    totalPrice,
    dishes: modifiedData,
  }
}
