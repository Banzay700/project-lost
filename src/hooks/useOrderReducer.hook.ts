import { useAppDispatch, useAppSelector } from 'hooks'
import {
  updateDishAmount,
  openOrder,
  changeOrderStatus,
  deleteNewOrder,
  addDishToOrder,
} from 'store/reducers'
import { OrderActiveType, OrderDishResponseType, OrderStatusType } from 'types'

export const useOrderReducer = () => {
  const dispatch = useAppDispatch()

  const activeOrder = useAppSelector((state) => state.orders.activeOrder)

  const addDish = (dish: OrderDishResponseType) => dispatch(addDishToOrder(dish))
  const openNewOrder = (order: OrderActiveType) => dispatch(openOrder(order))
  const switchOrderStatus = (status: OrderStatusType) => dispatch(changeOrderStatus(status))
  const clearNewOrderState = () => dispatch(deleteNewOrder())
  const changeDishAmount = (data: { id: string; amount: number }) =>
    dispatch(updateDishAmount(data))
  const { orderType, table } = activeOrder

  const orderFormExistingValues = { orderType, table }

  return {
    activeOrder,
    dishes: activeOrder.dishes,
    orderFormExistingValues,
    addDish,
    openNewOrder,
    switchOrderStatus,
    changeDishAmount,
    clearNewOrderState,
  }
}
