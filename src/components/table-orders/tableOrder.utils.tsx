import { OrderType } from 'types'

export const tableTitleOrder: string[] = [
  'Table Number',
  'Order Number',
  'Total Price',
  'Order Type',
  'Actions',
]

export const prepareBillsData = (id: string, data: OrderType[] | undefined) => {
  if (!data) return false
  const activeOrder = data.find((order) => order.id === id)

  if (!activeOrder) return false
  const { totalPrice, dishes } = activeOrder
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
