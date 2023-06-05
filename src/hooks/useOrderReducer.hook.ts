import { useAppDispatch, useAppSelector } from 'hooks'
import {
  updateDishAmount,
  openOrder,
  changeOrderStatus,
  deleteNewOrder,
  addDishToOrder,
  removeDishOrder,
} from 'store/reducers'
import { OrderActiveType, OrderDishType, OderStoreStatusType } from 'types'

export const useOrderReducer = () => {
  const dispatch = useAppDispatch()

  const activeOrder = useAppSelector((state) => state.orders.activeOrder)
  const newBill = useAppSelector((state) => state.bills.newBill)

  const addDish = (dish: OrderDishType) => dispatch(addDishToOrder(dish))
  const removeDish = (dishID: string) => dispatch(removeDishOrder(dishID))
  const openNewOrder = (order: OrderActiveType) => dispatch(openOrder(order))
  const switchOrderStatus = (status: OderStoreStatusType) => dispatch(changeOrderStatus(status))
  const clearNewOrderState = () => dispatch(deleteNewOrder())
  const changeDishAmount = (data: { id: string; amount: number }) =>
    dispatch(updateDishAmount(data))
  const { orderType, table } = activeOrder

  const orderFormExistingValues = { orderType, table }

  return {
    newBill,
    activeOrder,
    dishes: activeOrder.dishes,
    orderFormExistingValues,
    addDish,
    removeDish,
    openNewOrder,
    switchOrderStatus,
    changeDishAmount,
    clearNewOrderState,
  }
}
