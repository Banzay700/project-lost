import { useAppDispatch, useAppSelector } from 'hooks'
import { openNewOrder, addDishToOrder, addOrderToActive } from 'store/reducers'

import { ActiveOrderType, NewOrderType } from 'store/reducers/order.slice'
import { IDishes } from 'types/IOrder'

export const useNewOrderReducer = () => {
  const dispatch = useAppDispatch()

  const newOrder = useAppSelector((state) => state.orders.newOrder)
  const { dishes } = useAppSelector((state) => state.orders.newOrder)
  const activeOrder = useAppSelector((state) => state.orders.activeOrder)

  const addDish = (dish: IDishes) => dispatch(addDishToOrder(dish))
  const createNewOrder = (order: NewOrderType) => dispatch(openNewOrder(order))
  // const addActiveOrderToStore = (order: ActiveOrderType) => dispatch(addOrderToActive(order))

  return { newOrder, dishes, activeOrder, createNewOrder, addDish }
}
