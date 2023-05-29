import { useAppDispatch, useAppSelector } from 'hooks'
import {
  openNewOrder,
  addDishToOrder,
  addOrderToActive,
  changeOrderStatus,
  deleteNewOrder,
} from 'store/reducers'

import { OrderActiveType, DishType, NewOrderType } from 'types/ORDERS_TYPES'

export const useOrderReducer = () => {
  const dispatch = useAppDispatch()

  const newOrder = useAppSelector((state) => state.orders.newOrder)
  const { dishes } = useAppSelector((state) => state.orders.newOrder)
  const activeOrder = useAppSelector((state) => state.orders.activeOrder)

  const addDish = (dish: DishType) => dispatch(addDishToOrder(dish))
  const createNewOrder = (order: NewOrderType) => dispatch(openNewOrder(order))
  const addActiveOrder = (order: OrderActiveType) => dispatch(addOrderToActive(order))
  const changeActiveOrderStatus = () => dispatch(changeOrderStatus())
  const clearNewOrderState = () => dispatch(deleteNewOrder())

  const { orderType, table } = activeOrder

  const orderFormExistingValues = { orderType, table }

  return {
    newOrder,
    dishes,
    activeOrder,
    orderFormExistingValues,
    createNewOrder,
    addDish,
    addActiveOrder,
    changeActiveOrderStatus,
    clearNewOrderState,
  }
}
