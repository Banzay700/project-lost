import { FilterMenuItemType, IndicatorItemType, OrderType } from 'types/index'

export const tableTitleOrder: string[] = [
  'Table Number',
  'Order Number',
  'Total Price',
  'Order Type',
  'Actions',
]

export const tableFilterMenuItems: FilterMenuItemType[] = [
  { value: 'dineIn', label: 'Dine in' },
  { value: 'takeAway', label: 'Take away' },
  { value: 'delivery', label: 'Delivery' },
]

export const tableIndicatorItems: IndicatorItemType[] = [
  {
    label: 'Dine in',
    type: 'primary',
  },
  {
    label: 'Take away',
    type: 'blue',
  },
  {
    label: 'Delivery',
    type: 'yellow',
  },
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
