import { OrderDishType } from 'types/OrderBillsType'

export const calculateTotalPrice = (dishes: OrderDishType[]) =>
  dishes.reduce((acc, item) => acc + item.dishTotalPrice, 0)
