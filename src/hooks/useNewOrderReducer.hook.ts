import { useAppDispatch, useAppSelector } from 'hooks'
import { openNewOrder, addDishToOrder } from 'store/reducers'

import { NewlyOrderType } from 'store/reducers/newlyCreatedOrder.slice'
import { IDishes } from 'types/IOrder'

export const useNewOrderReducer = () => {
  const dispatch = useAppDispatch()

  const newlyOrder = useAppSelector((state) => state.newlyOrder.newlyOrder)
  const { dishes } = useAppSelector((state) => state.newlyOrder.newlyOrder)

  const createNewOrder = (order: NewlyOrderType) => dispatch(openNewOrder(order))
  const addDish = (dish: IDishes) => dispatch(addDishToOrder(dish))

  return { newlyOrder, dishes, createNewOrder, addDish }
}
